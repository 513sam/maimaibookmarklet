(function(){
var SHEETJS='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
// 난이도 색상(hex) -> 이름 매핑. rr-level 요소의 --rr-level-bg 커스텀 프로퍼티 값 사용.
var DIFF_COLOR={
  '#4cc927':'BASIC',
  '#ffc205':'ADVANCED',
  '#fa6c75':'EXPERT',
  '#a65cdf':'MASTER',
  '#e8e8e8':'Re:MASTER' // Re:MASTER 실제 색상 다르면 콘솔에서 확인 후 수정 필요
};

function getDifficulty(card){
  var levelDiv=card.querySelector('div.rr-level');
  if(!levelDiv) return '';
  var bg=levelDiv.style.getPropertyValue('--rr-level-bg').trim().toLowerCase();
  return DIFF_COLOR[bg]||'';
}

function getConstant(card){
  var lgtAlign=card.querySelector('div.rr-level .lgt-align');
  if(!lgtAlign) return '';
  // 정수부: lgt-align의 직계 자식 span.gt (lgt-frac 안에 있지 않은 것)
  var intSpan=null, fracSpan=null;
  lgtAlign.childNodes.forEach(function(n){
    if(n.nodeType===1 && n.tagName==='SPAN' && n.classList.contains('gt')) intSpan=n;
  });
  var fracWrap=lgtAlign.querySelector('.lgt-frac');
  if(fracWrap) fracSpan=fracWrap.querySelector('span.gt');
  if(!intSpan||!fracSpan) return '';
  var intVal=intSpan.textContent.trim();
  var decVal=fracSpan.textContent.trim(); // 예: ".8"
  var parsed=parseFloat(intVal+decVal);
  if(isNaN(parsed)) return '';
  return parsed.toFixed(1);
}

function extract(){
  var cards=document.querySelectorAll('div.rr');
  if(!cards.length){alert('카드 없음. 페이지 로드 확인');return [];}
  var results=[];
  cards.forEach(function(card){
    var titleEl=card.querySelector('span.rr-title .st-wrap');
    if(!titleEl)return;
    var title=titleEl.textContent.trim();
    if(!title)return;
    var artistEl=card.querySelector('span.rr-artist');
    var artist=artistEl?artistEl.textContent.trim():'';
    var typeImg=card.querySelector('img.rr-type');
    var chartType=typeImg?(typeImg.alt==='DX'?'DX':'STD'):'';
    var difficulty=getDifficulty(card);
    var constant=getConstant(card);
    var jacketImg=card.querySelector('img.rr-jacket');
    var jacket=jacketImg?jacketImg.src:'';
    results.push({'Song Name':title,'Artist':artist,'Type':chartType,'Difficulty':difficulty,'Constant':constant,'Jacket':jacket,'New':'OLD'});
  });
  return results;
}

function buildXlsx(records){
  var seen={};
  var final=[];
  records.forEach(function(r){
    var k=r['Song Name']+'||'+r.Type+'||'+r.Difficulty;
    if(!seen[k]){seen[k]=true;final.push(r);}
  });
  var ws=XLSX.utils.json_to_sheet(final,{header:['Song Name','Artist','Type','Difficulty','Constant','Jacket','New']});
  ws['!cols']=[{wch:42},{wch:24},{wch:6},{wch:12},{wch:10},{wch:65},{wch:6}];
  var wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'maimai_data');
  var today=new Date().toISOString().slice(0,10);
  XLSX.writeFile(wb,'maishift_'+today+'.xlsx');
  var noDiff=final.filter(function(r){return !r.Difficulty;}).length;
  var noConst=final.filter(function(r){return r.Constant==='';}).length;
  alert('완료! '+final.length+'개'+(noDiff?' | 난이도미확인:'+noDiff:'')+(noConst?' | 상수미확인:'+noConst:''));
}

function run(){
  var N=15,same=0,prev=0;
  var ov=document.createElement('div');
  ov.id='__bmov';
  ov.style.cssText='position:fixed;top:12px;right:12px;z-index:99999;background:#111827;color:#60a5fa;border:2px solid #60a5fa;border-radius:8px;padding:12px 18px;font:13px monospace;box-shadow:0 4px 16px #0009;min-width:200px;';
  ov.innerHTML='<b>기록 추출 중...</b><br><span id="__bmst">스크롤 시작...</span>';
  document.body.appendChild(ov);
  var st=document.getElementById('__bmst');
  var t=setInterval(function(){
    window.scrollBy(0,800);
    var cur=document.querySelectorAll('div.rr').length;
    var atBottom=(window.innerHeight+window.scrollY)>=document.body.scrollHeight-200;
    st.textContent='로드: '+cur+'개 | 정지: '+same+'/'+N+(atBottom?' | 바닥':'');
    if(cur===prev)same++;else{same=0;prev=cur;}
    if(same>=N && atBottom){
      clearInterval(t);
      st.textContent='추출 중... ('+cur+'개)';
      setTimeout(function(){
        var recs=extract();
        var el=document.getElementById('__bmov');
        if(el)el.parentNode.removeChild(el);
        if(!recs||!recs.length){alert('기록 없음');return;}
        buildXlsx(recs);
      },800);
    }
  },500);
}

if(typeof XLSX!=='undefined'){run();}
else{
  var s=document.createElement('script');
  s.src=SHEETJS;
  s.onload=run;
  s.onerror=function(){alert('SheetJS 로드 실패');};
  document.head.appendChild(s);
}
})();
