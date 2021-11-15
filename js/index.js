//header - max-width:726px;  윈도우가 처음 찍혔을때 사이즈만 먹힘 / 자동반응형x.....
let mobileScreen = window.matchMedia("screen and (max-width: 726px)");
const mobileNav = document.getElementById('mobileNav');

if(mobileScreen.matches){
    mobileNav.classList.add('active');
}else {
    mobileNav.style.display="none";
}

//scroll up & donw 시 mobileNav active 추가제거 

let lastScrollTop = 0;

document.addEventListener("scroll", function(){ 
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       mobileNav.classList.remove('active');
   } else {
       mobileNav.classList.add('active');
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
