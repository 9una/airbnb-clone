//마이페이지 모달
const mypageModal = document.querySelector(".nav__right-myBtn-modal");

function mypageModalToggle(){
    mypageModal.classList.toggle('active');
}

// 언어&통화 모달
const modalBg = document.getElementById('modalBg'),
    lngCurModal = document.getElementById("modal_lng_cur"),
    loginModal = document.getElementById("modal_login");

function modalLng(){
    lngCurModal.classList.add('active');
    modalBg.classList.add('active');
}
function modalLngClose(){
    lngCurModal.classList.remove('active');
    modalBg.classList.remove('active');
}
function modalLogin(){
    loginModal.classList.add('active');
    modalBg.classList.add('active');
}
function modalLoginClose(){
    loginModal.classList.remove('active');
    modalBg.classList.remove('active');
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


/*
1 - 첫번째 버튼은 active 상태 유지
3 - 버튼 두개와 컨텐츠 2개의 index 연결
2 - 두번쨰 버튼을 누르면 1번의 active 없어짐
*/

// searchForm - 체크인-체크아웃
// searchForm - 게스트 카운트