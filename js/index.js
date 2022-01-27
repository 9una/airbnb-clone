//scroll up & donw 시 mobileNav active 추가제거 
let lastScrollTop = 0;

function scrollAddActive(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        mobileNav.classList.remove('active');
    } else {
        mobileNav.classList.add('active');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

//header - max-width:768px;
let mobileScreen = window.matchMedia("screen and (max-width: 768px)");
const mobileNav = document.getElementById('mobileNav');

function innerWidthMatch(){
    if(mobileScreen.matches){
        mobileNav.style.display="flex";
        mobileNav.classList.add('active');
        document.addEventListener("scroll", scrollAddActive, false);
        //innerWidthMatch시 스크롤 함수 실행
    }else {
        mobileNav.style.display="none";
    }
}
innerWidthMatch(); //함수 바로 실행

window.onresize = function(event){
    innerWidthMatch();
} //리사이즈때도 실행