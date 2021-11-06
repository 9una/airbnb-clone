//100vh 스크롤시 헤더 고정
const header = document.getElementById("host-header");

const winMedSmall = window.matchMedia("(max-width: 726px)"); //media screen max-width:726

function scrollFunc(){
    if(scrollY >= window.innerHeight){
        header.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    }
    if (winMedSmall.matches){
        header.classList.remove("fixed");
    }
}

document.addEventListener('scroll', scrollFunc);

// max-width:726px 호스팅 시작하기 btn - fixed로 bottom:0;
/*if (winMedSmall.matches){
    
}*/