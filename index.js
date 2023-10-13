// 최초 실행시 윈도우Y값을 변수에 담음
var prevScrollpos = window.pageYOffset;

// 스크롤 할 때 마다 pageYOffset값 을 가져와서 조건문을 설정
window.onscroll = function () {
  // 스크롤 할 때 마다의 pageYoffset값을 변수에 담음
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headers").style.top = "0";
  } else if (prevScrollpos < currentScrollPos) {
    document.getElementById("headers").style.top = "-80px";
  }
  //  최초 실행 된 pageYoffset값과 현재 위치의 pageYoffset값을 같다고 선언
  prevScrollpos = currentScrollPos;
};
