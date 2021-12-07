// 스크롤시 헤더 고정
const localNav = document.querySelector('.local-nav'),
    mobileSearch = document.querySelector('.mobile-search');

function scrollFunc(){
    if(scrollY >= 80){
        localNav.classList.add("fixed");
        mobileSearch.classList.add("fixed");
    }else{
        localNav.classList.remove("fixed");
        mobileSearch.classList.remove("fixed");
    }
}
document.addEventListener('scroll', scrollFunc);


const filterSection = document.querySelectorAll('.local-nav-right > div');
for(let i = 0; i < filterSection.length; i++){
    const filterBtn = filterSection[i].querySelector('button');
    filterBtn.addEventListener('click', ()=>{
        let j = 0;
        while(j < filterSection.length){
            filterSection[j++].querySelector('.modal').classList.remove('active');
        }
        filterSection[i].querySelector('.modal').classList.add('active');
    })
}