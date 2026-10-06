javascript:(function(){
  'use strict';
  // 갱신 기능은 이제 사이트 서버(https://maivoltex.kro.kr/collect.js)로
  var SITE = 'https://maivoltex.kro.kr';
  var go = confirm(
    '📢 북마클릿 코드가 바뀌었습니다!\n\n' +
    '이 북마클릿으로는 더 이상 갱신되지 않아요.\n' +
    '사이트(maivoltex.kro.kr)의 [📡 데이터 갱신] 안내에서 새 북마클릿 코드를 다시 등록한 뒤 갱신해주세요.\n\n' +
    '지금 사이트를 열까요?'
  );
  if (go) {
    try { window.open(SITE, '_blank'); } catch (e) {}
  }
})();
