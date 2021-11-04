const modalBg = document.getElementById('modalBg');

//마이페이지 모달
const mypageModal = document.querySelector(".nav__right-myBtn-modal");

function mypageModalToggle(){
    console.log("hi");
    mypageModal.classList.toggle('active');
}

// 언어&통화 모달
const lngCurBtn = document.querySelector(".nav__right-global"),
    lngCurModal = document.querySelector(".lng-cur__modal");

function gnbModalLngCur(){
    lngCurModal.classList.add('active');
    modalBg.classList.add('active');
}
function gnbModalClose(){
    lngCurModal.classList.remove('active');
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

// header - searchForm 모달
const searchForm = document.querySelector('.nav__form-search');
const searchTab = document.querySelectorAll('.form-search__form.active > div');
const searchBtn = document.querySelector('.nav__form-search > button');

for (let i = 0; i < searchTab.length; i++) {
    searchTab[i].onclick = function(){
        searchForm.classList.add('active');
        let j = 0;
        while(j < searchTab.length){
            searchTab[j++].className = "modal-tab";
        }
        searchTab[i].className = 'modal-tab active';
        searchBtn.classList.add('active');
    }
}
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/ 참고
