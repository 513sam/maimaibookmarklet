(function(){
var SHEETJS='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
var JACKET_BASE='https://maimaidx-eng.com/maimai-mobile/img/Music/';
var DIFF_COLOR={'rgb(166, 92, 223)':'MASTER','rgb(232, 232, 232)':'Re:MASTER','rgb(250, 108, 117)':'EXPERT','rgb(76, 201, 39)':'BASIC','rgb(255, 194, 5)':'ADVANCED'};
var DIFF_ORDER={'Re:MASTER':0,'MASTER':1,'EXPERT':2,'ADVANCED':3,'BASIC':4};

function normBg(el){
  var s=el.style.background||el.style.backgroundColor||'';
  return s.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/,function(_,a,b,c){return 'rgb('+a+', '+b+', '+c+')';}).trim();
}

function extract(){
  var cards=document.querySelectorAll('div.css-1px98cv');
  if(!cards.length){alert('카드 없음 (div.css-1px98cv). 페이지 로드 확인');return [];}
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
    var constSpans=card.querySelectorAll('span.css-1unogd5');
    var constant='';
    if(constSpans.length>=2){
      var parsed=parseFloat(constSpans[0].textContent.trim()+constSpans[1].textContent.trim());
      constant=isNaN(parsed)?'':parsed;
    } else if(constSpans.length===1){
      var parsed=parseFloat(constSpans[0].textContent.trim()+'.0');
      constant=isNaN(parsed)?'':parsed;
    }
    var jacketImg=card.querySelector('img[src*="Music"]');
    var jacket='';
    if(jacketImg){
      var m=decodeURIComponent(jacketImg.src).match(/Music\/([0-9a-fA-F]+)\.png/);
      jacket=m?JACKET_BASE+m[1]+'.png':'';
    }
    results.push({'Song Name':title,'Artist':artist,'Type':chartType,'Difficulty':difficulty,'Constant':constant,'Jacket':jacket});
  });
  return results;
}

function buildXlsx(records){
  var map={};
  records.forEach(function(r){
    var k=r['Song Name']+'||'+r.Type+'||'+r.Difficulty;
    if(!map[k]||(r.Constant>map[k].Constant))map[k]=r;
  });
  var final=Object.values(map);
  final.sort(function(a,b){
    return (b.Constant||0)-(a.Constant||0)||
           (DIFF_ORDER[a.Difficulty]||9)-(DIFF_ORDER[b.Difficulty]||9)||
           a['Song Name'].localeCompare(b['Song Name']);
  });
  var ws=XLSX.utils.json_to_sheet(final,{header:['Song Name','Artist','Type','Difficulty','Constant','Jacket']});
  ws['!cols']=[{wch:42},{wch:24},{wch:6},{wch:12},{wch:10},{wch:65}];
  var wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'maimai_data');
  var today=new Date().toISOString().slice(0,10);
  XLSX.writeFile(wb,'maishift_'+today+'.xlsx');
  var noDiff=final.filter(function(r){return !r.Difficulty;}).length;
  alert('완료! '+final.length+'개 채보'+(noDiff?' | 난이도미확인:'+noDiff+'개':''));
}

function run(){
  var N=5,same=0,prev=0;
  var ov=document.createElement('div');
  ov.id='__bmov';
  ov.style.cssText='position:fixed;top:12px;right:12px;z-index:99999;background:#111827;color:#60a5fa;border:2px solid #60a5fa;border-radius:8px;padding:12px 18px;font:13px monospace;box-shadow:0 4px 16px #0009;';
  ov.innerHTML='<b>기록 추출 중...</b><br><span id="__bmst">스크롤 시작...</span>';
  document.body.appendChild(ov);
  var st=document.getElementById('__bmst');
  var t=setInterval(function(){
    window.scrollBy(0,1400);
    var cur=document.querySelectorAll('div.css-1px98cv').length;
    st.textContent='로드: '+cur+'개 | 정지: '+same+'/'+N;
    if(cur===prev)same++;else{same=0;prev=cur;}
    if(same>=N){
      clearInterval(t);
      st.textContent='추출 중...';
      setTimeout(function(){
        var recs=extract();
        var el=document.getElementById('__bmov');
        if(el)el.parentNode.removeChild(el);
        if(!recs||!recs.length)return;
        buildXlsx(recs);
      },600);
    }
  },300);
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
