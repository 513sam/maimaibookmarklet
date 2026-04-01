(function(){
var SHEETJS='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
var JACKET_BASE='https://maimaidx-eng.com/maimai-mobile/img/Music/';
var DIFF_COLOR={'rgb(166, 92, 223)':'MASTER','rgb(232, 232, 232)':'Re:MASTER','rgb(250, 108, 117)':'EXPERT','rgb(76, 201, 39)':'BASIC','rgb(255, 194, 5)':'ADVANCED'};

function normBg(el){
  var s=el.style.background||el.style.backgroundColor||'';
  return s.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/,function(_,a,b,c){return 'rgb('+a+', '+b+', '+c+')';}).trim();
}

function getConstant(card){
  // 난이도 div 안의 span들에서 정수부/소수부 패턴으로 찾기
  var diffEl=card.querySelector('div.css-ggdfvq');
  if(!diffEl) return '';
  var intVal='', decVal='';
  var spans=diffEl.querySelectorAll('span');
  spans.forEach(function(sp){
    var t=sp.textContent.trim();
    if(/^\d+$/.test(t) && !intVal) intVal=t;
    if(/^\.\d+\+?$/.test(t) && !decVal) decVal=t.replace('+','');
  });
  if(!intVal) return '';
  if(!decVal) decVal='.0';
  var parsed=parseFloat(intVal+decVal);
  if(isNaN(parsed)) return '';
  // 소수점 1자리 고정 문자열로 반환 (11 → "11.0", 14.9 → "14.9")
  return parsed.toFixed(1);
}

function extract(){
  var cards=document.querySelectorAll('div.css-1px98cv');
  if(!cards.length){alert('카드 없음. 페이지 로드 확인');return [];}
  var results=[];
  cards.forEach(function(card){
    var titleEl=card.querySelector('span.css-19q1gey');
    if(!titleEl)return;
    var title=titleEl.textContent.trim();
    if(!title)return;
    var artistEl=card.querySelector('span.css-1bt7c9a');
    var artist=artistEl?artistEl.textContent.trim():'';
    var typeImg=card.querySelector('img[src*="music_dx"]');
    var chartType=typeImg?'DX':'STD';
    var diffEl=card.querySelector('div.css-ggdfvq');
    var difficulty=diffEl?DIFF_COLOR[normBg(diffEl)]||'':'';
    var constant=getConstant(card);
    var jacketImg=card.querySelector('img[src*="Music"]');
    var jacket='';
    if(jacketImg){
      var m=decodeURIComponent(jacketImg.src).match(/Music\/([0-9a-fA-F]+)\.png/);
      jacket=m?JACKET_BASE+m[1]+'.png':'';
    }
    // DOM 순서 그대로 저장 (정렬 없음)
    results.push({'Song Name':title,'Artist':artist,'Type':chartType,'Difficulty':difficulty,'Constant':constant,'Jacket':jacket,'New':'OLD'});
  });
  return results;
}

function buildXlsx(records){
  // 중복 제거만 (순서 유지)
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
    var cur=document.querySelectorAll('div.css-1px98cv').length;
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
