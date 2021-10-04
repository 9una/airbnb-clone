const modalActiveBg = document.getElementById("modalActiveBg");

const mypageBtn = document.querySelector(".nav__right-myBtn");
const mypageModal = document.querySelector(".nav__right-myBtn-modal");

function seachBtnClick(){
    header.classList.remove("searchBtn");
    modalActiveBg.classList.add("active");
    if(header.className !== "scroll"){
        console.log("not scroll");
        modalActiveBg.classList.remove("active");
        formBtn.classList.remove("active");
    }
}

mypageBtn.addEventListener("click", () => {
    mypageModal.classList.toggle('active');
});
//마이페이지 모달


const lngCurBtn = document.querySelector(".nav__right-global");
const lngCurModal = document.querySelector(".lng-cur__modal");
const lngCurClose = lngCurModal.querySelector(".btn-close");

lngCurBtn.addEventListener("click", () => {
    lngCurModal.classList.add('active');
    modalActiveBg.classList.add('active');
})
lngCurClose.addEventListener("click", () => {
    lngCurModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
})
// header-언어&통화 모달


const footerLngModal = document.querySelector(".language__modal");
const footerLngBtn = document.querySelector(".fnb__bottom-language");

const footerCurModal = document.querySelector(".currency__modal");
const footerCurBtn = document.querySelector(".fnb__bottom-currency");

const lngClose = footerLngModal.querySelector(".btn-close");
const curClose = footerCurModal.querySelector(".btn-close");

footerLngBtn.addEventListener("click", () => {
    footerLngModal.classList.add('active');
    modalActiveBg.classList.add('active');
})
lngClose.addEventListener("click", () => {
    footerLngModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
})
footerCurBtn.addEventListener("click", () => {
    footerCurModal.classList.add('active');
    modalActiveBg.classList.add('active');
})
curClose.addEventListener("click", () => {
    footerCurModal.classList.remove('active');
    modalActiveBg.classList.remove('active');
})
// footer-언어, 통화 모달