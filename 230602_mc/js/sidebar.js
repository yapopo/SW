// 변수 선언 : 어떤 값을 담는 박스 (var, let, const)
// javascript는 변수명을 지을 때 카멜 표기법을 사용한다

const gnbIconBtn = document.querySelector('.gnb-icon-btn');


// const gnbIconBtn = document.querySelectorByClassName('클래스명')
// const gnbIconBtn = document.querySelectorById('아이디명')


const sdbar = document.querySelector('.sdbar')
const sdbarOverlay = document.querySelector('.overlay')

console.log(gnbIconBtn,sdbar,sdbarOverlay);

function openSidebar() {
  sdbar.classList.add('is-active');
  sdbarOverlay.classList.add('is-active');
}
// 실행코드 차근차근
// 1.gnbIconBtn 클릭 했을 떄 sdbar, sdbarOverlay한테 is-active라는 class추가
// 2.다시 한번 클릭했을 때, is-active라는 class제거
// DOM 메소드를 이용해서 class 추가/제거
// DOM : 스크립팅 언어가 만들어진 웹페이지에 접근해서 요소를 쉽게 조작하게 해줌
// DOM 데이터타입 : 메소드, 프로퍼티, 이벤트 리스너, 스타일
// 함수를 만드는 공식 : funtion 함수명(){실행할코드}

gnbIconBtn.addEventListener('click', openSidebar);

function closeSidebar() {
  sdbar.classList.remove('is-active');
  sdbarOverlay.classList.remove('is-active');
}

sdbarOverlay.addEventListener('click', closeSidebar);
