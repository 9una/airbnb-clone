// 스크롤시 헤더 고정
const header = document.getElementById("header"),
    nav = document.querySelector('.global-nav');
    mobileSearch = document.querySelector('.mobile-search');

function scrollFunc(){
    if(scrollY >= 58){
        nav.classList.add("fixed");
        mobileSearch.classList.add("active");
        document.querySelector('.nav-center__form').addEventListener('click', ()=>{
            nav.classList.add("white");
        }); //global-nav.fixed일때 클릭하면 white클래스 추가
        if(nav.classList.contains("white")){
            nav.classList.remove("white");
        } //white클래스 추가되어 있을때 스크롤하면 white제거
        if(nav.classList.contains('fixed')){
            document.querySelector('.nav-left a').innerHTML = `<img src="img/logo_1.png" alt="로고 이미지" />`;
        }
    }else if(scrollY >= 100){
        headerHost.classList.add("fixed");
    }else{
        
        document.querySelector('.nav-left a').innerHTML = `<img src="img/logo_white_1.png" alt="로고 이미지" />`;
        nav.classList.remove("fixed");
        mobileSearch.classList.remove("active");
    }
}
document.addEventListener('scroll', scrollFunc);


// header - searchForm 모달
// const formTab = document.querySelector('.nav__form-tab');
// const searchForm = document.querySelector('.nav__form-search');
// const searchTab = document.querySelectorAll('.form-search__form.active > div');
// const searchBtn = document.querySelector('.nav__form-search > button');

// for (let i = 0; i < searchTab.length; i++) {
//     searchTab[i].onclick = function(){
//         if(searchTab[i].parentNode.id === 'rooms'){
//             console.log('hi');
//         }
//         searchForm.classList.add('active');
//         let j = 0;
//         while(j < searchTab.length){
//             searchTab[j++].classList.remove('active');
//         }
//         searchTab[i].classList.add('active');
//         searchBtn.classList.add('active');
//     }
// }
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/ 참고
