// header - nav-center__form 모달
const formBtn = document.querySelectorAll('.form-tab button');
const formSearchBtn = document.querySelector('.nav-center__form .search-btn');
const formModal = document.querySelectorAll('.nav-center__modal div');
for(let i = 0; i < formBtn.length; i++){
    formBtn[i].addEventListener('click', openModal);

    function openModal(){
        document.querySelector('.form-tab').style.background = "#efefef";
        formSearchBtn.classList.add('active');
        let j = 0,
            k = 0;
        while(j < formBtn.length - 1 && k < formBtn.length){
            formModal[j++].classList.remove('active');
            formBtn[k++].classList.remove('active');
            if(k < 3){
                formBtn[3].classList.remove('active');
            }
        }
        if(i == 0){
            document.querySelector('.where').classList.add('active');
        }
        if(i == 1 || i == 2){
            document.querySelector('.when').classList.add('active');
        } // 체크인&아웃 버튼 일시 when modal open
        if(i == 3){
            document.querySelector('.guest').classList.add('active');
        }
        if(i != 3){
            document.querySelector('.guest').classList.remove('active');
        }
        formBtn[i].classList.add('active');
    }
    
}

// 스크롤시 헤더 고정
const header = document.getElementById("header"),
    nav = document.querySelector('.global-nav'),
    mobileSearch = document.querySelector('.mobile-search');

function scrollFunc(){
    if(scrollY >= 58){
        nav.classList.add("fixed");
        mobileSearch.classList.add("fixed");
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
        mobileSearch.classList.remove("fixed");
    }

    if(document.querySelector('.nav-center__modal > div.active')){
        //modal중에 active가 있을때 스크롤 하면..
        document.querySelector('.search-btn').classList.remove('active');
        document.querySelector('.form-tab').style.background = "white";
        
        document.querySelector('.form-tab > button.active').classList.remove('active')
        document.querySelector('.nav-center__modal > div.active').classList.remove('active');
    }
}
document.addEventListener('scroll', scrollFunc);
