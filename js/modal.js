const modalBg = document.getElementById('modalBg');

//마이페이지 모달
const mypageModal = document.querySelector(".nav__right-myBtn-modal");

function mypageModalToggle(){
    mypageModal.classList.toggle('active');
}

// 언어&통화 모달
const lngCurBtn = document.querySelector(".nav__right-global"),
    lngCurModal = document.querySelector(".lng-cur__modal"),
    loginModal = document.querySelector(".join-login__modal");

function gnbModalLngCur(){
    lngCurModal.classList.add('active');
    modalBg.classList.add('active');
}
function gnbModalClose(){
    lngCurModal.classList.remove('active');
    modalBg.classList.remove('active');
}
function gnbModalLogin(){
    loginModal.classList.add('active');
    modalBg.classList.add('active');
}
function loginModalClose(){
    loginModal.classList.remove('active');
    modalBg.classList.remove('active');
}

// 언어&통화 모달 탭전환
const typeLngCurBtn = document.querySelectorAll('.lng-cur__type button'),
    typeLngCur = document.querySelectorAll('.lng-cur__cont-box > div');

function tabLngCur(){
    console.log('탭!');
}

/*
1 - 첫번째 버튼은 active 상태 유지
3 - 버튼 두개와 컨텐츠 2개의 index 연결
2 - 두번쨰 버튼을 누르면 1번의 active 없어짐
*/

// searchForm - 체크인-체크아웃
// searchForm - 게스트 카운트