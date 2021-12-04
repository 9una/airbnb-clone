// 스크롤시 헤더 고정
const header = document.getElementById("header"),
    nav = document.querySelector('nav'),
    mobileSearch = document.querySelector('.mobile-search');

function scrollFunc(){
    if(scrollY >= 70){
        header.classList.add("fixed");
        nav.classList.add("active");
        mobileSearch.classList.add("active");
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
        mobileSearch.classList.remove("active");
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
        if(searchTab[i].parentNode.id === 'rooms'){
            console.log('hi');
        }
        searchForm.classList.add('active');
        let j = 0;
        while(j < searchTab.length){
            searchTab[j++].classList.remove('active');
        }
        searchTab[i].classList.add('active');
        searchBtn.classList.add('active');
    }
}
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/ 참고
