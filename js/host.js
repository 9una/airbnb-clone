//100vh 스크롤시 헤더 고정
const header = document.getElementById("host-header");

function scrollFunc(){
    if(scrollY >= window.innerHeight){
        header.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    }
}

document.addEventListener('scroll', scrollFunc);

