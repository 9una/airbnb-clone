//100vh 스크롤시 헤더 고정
const header = document.getElementById("host__header");

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

/* video - play & pause */
function playVid(event){

    const playBtn = event.currentTarget;
    const parent = playBtn.parentNode.parentNode.parentNode;
    const vid = parent.querySelector('video');
    vid.play();
    playBtn.classList.remove('active');
    const pauseBtn = parent.querySelector('.btn-pause');
    pauseBtn.classList.add('active');
    vid.addEventListener("ended",()=>{
        pauseBtn.classList.remove('active');
        playBtn.classList.add('active');
    }); //영상이 끝나면 다시 재생버튼으로
}

function pauseVid(event){

    const pauseBtn = event.currentTarget;
    const parent = pauseBtn.parentNode.parentNode.parentNode;
    const vid = parent.querySelector('video');
    vid.pause();
    pauseBtn.classList.remove('active');
    const playBtn = parent.querySelector('.btn-play');
    playBtn.classList.add('active');

}