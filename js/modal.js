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