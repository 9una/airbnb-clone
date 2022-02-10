//마이페이지 모달
function mypageModalToggle(){
    document.querySelector(".user-btn-modal").classList.toggle('active');

    document.addEventListener('scroll', ()=>{
        document.querySelector(".user-btn-modal").classList.remove('active');
    })
}


//모바일 검색창 모달
const mobileSearchBox = document.getElementById('mobileSearch');
function callSearch(){
    mobileSearchBox.classList.add('active');
}

function closeSearch(){
    mobileSearchBox.classList.remove('active');
}