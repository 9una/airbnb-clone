//마이페이지 모달
function mypageModalToggle(){
    document.querySelector(".user-btn-modal").classList.toggle('active');
}

// 언어&통화 모달
const modalBg = document.getElementById('modalBg'),
    lngCurModal = document.getElementById("modal_lng_cur"),
    loginModal = document.getElementById("modal_login");

function modalLng(){
    lngCurModal.classList.add('active');
    modalBg.classList.add('active');
    document.querySelector('body').style.overflow ="hidden";
}
function modalLngClose(){
    lngCurModal.classList.remove('active');
    modalBg.classList.remove('active');
    document.querySelector('body').style.overflow ="";
}
function modalLogin(){
    loginModal.classList.add('active');
    modalBg.classList.add('active');
    document.querySelector('body').style.overflow ="hidden";
}
function modalLoginClose(){
    loginModal.classList.remove('active');
    modalBg.classList.remove('active');
    document.querySelector('body').style.overflow ="";
}

// 언어&통화 모달 탭전환
const typeLngCurBtn = document.querySelectorAll('#modal_lng_cur .tab button');
const typeLngCurCont = document.querySelectorAll('#modal_lng_cur .content');

for (let i = 0; i < typeLngCurBtn.length; i++) {
    typeLngCurBtn[i].onclick = function(){
        let j = 0;
        while(j < typeLngCurBtn.length){
            typeLngCurBtn[j++].className = "type-btn";
        }
        typeLngCurBtn[i].className = 'type-btn active';

        let k = 0;
        while(k < typeLngCurBtn.length){
            typeLngCurCont[k++].className = 'content invisible';
        }
        typeLngCurCont[i].className = 'content';
    }
}

//search.html - 필터모달
const modalFilter = document.getElementById('modal_filter');
function callModalFilter(){
    modalFilter.classList.add('active');
    modalBg.classList.add('active');
    document.querySelector('body').style.overflow ="hidden";
}
function modalFilterClose(){
    modalFilter.classList.remove('active');
    modalBg.classList.remove('active');
    document.querySelector('body').style.overflow ="";
}
    //필터모달에 토글 css
function toggleBtn(event){
    const target = event.target.parentNode;
    target.classList.toggle('active');
    
}
function moreList(event){
    const target = event.target
    const targetList = target.parentNode;
    targetList.classList.toggle('more-list');
}


//모바일 검색창 모달
const mobileSearchBox = document.getElementById('mobileSearch');
function callSearch(){
    mobileSearchBox.classList.add('active');
}

function closeSearch(){
    mobileSearchBox.classList.remove('active');
}