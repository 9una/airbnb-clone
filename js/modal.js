//마이페이지 모달
const mypageModal = document.querySelector(".nav__right-myBtn-modal");

function mypageModalToggle(){
    console.log("hi");
    mypageModal.classList.toggle('active');
}

// header-언어&통화 모달
const modalActiveBg = document.getElementById("modalActiveBg"),
    lngCurBtn = document.querySelector(".nav__right-global"),
    lngCurModal = document.querySelector(".lng-cur__modal");

function gnbModalLngCur(){
    lngCurModal.classList.add('active');
    modalActiveBg.classList.add('active');
}
function gnbModalClose(){
    lngCurModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
}

// footer-언어&통화 모달
const footerLngBtn = document.querySelector(".fnb__bottom-language"),
    footerCurBtn = document.querySelector(".fnb__bottom-currency"),
    fnbLngModal = document.querySelector(".fnb__modal-lng"),
    fnbCurModal = document.querySelector(".fnb__modal-cur");

function fnbModalLng(){
    fnbLngModal.classList.add('active');
    modalActiveBg.classList.add('active');
}
function fnbModalLngClose(){
    fnbLngModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
}

function fnbModalCur(){
    fnbCurModal.classList.add('active');
    modalActiveBg.classList.add('active');
}
function fnbModalCurClose(){
    fnbCurModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
}

// header - searchForm 모달
const searchTab = document.querySelectorAll('.form-search__form.active > div');
const modalTab = document.querySelectorAll('.boxbundle > div');
const searchBtn = document.querySelector('.nav__form-search > button');

for (let i = 0; i < searchTab.length; i++) {
    
    searchTab[i].onclick = function(){
        let j = 0;
        while(j < searchTab.length){
            searchTab[j++].className = "modal-tab";
        }
        searchTab[i].className = 'modal-tab active';
        searchBtn.classList.add('active');
    }
        
}


//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/ 참고
