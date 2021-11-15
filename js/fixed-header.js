// 스크롤시 헤더 고정
const header = document.getElementById("header"),
    nav = document.querySelector('nav');

function scrollFunc(){
    if(scrollY >= 70){
        header.classList.add("fixed");
        nav.classList.add("active");
        if(searchBtn.className = 'active'){
            searchBtn.classList.remove('active');
        }
        searchForm.addEventListener('click', function(){
            nav.classList.remove("active");
           
        });
    }else if(scrollY >= 100){
        headerHost.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    }
}
document.addEventListener('scroll', scrollFunc);


// header - searchForm 모달
const formTab = document.querySelector('.nav__form-tab');
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
