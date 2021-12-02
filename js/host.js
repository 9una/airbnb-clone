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


//slider
let curPos = 2;
let postion = -16.7;
let start_x, end_x;
const IMAGE_WIDTH = 16.7;
const prevBtn = document.querySelector(".host-list__prev");
const nextBtn = document.querySelector(".host-list__next");
const hostList = document.querySelector(".host-list");

function prev(){
    if(curPos > 0){
      nextBtn.removeAttribute("disabled")
      postion += IMAGE_WIDTH;
      hostList.style.transform = `translateX(${postion}%)`;
      curPos -= 1;
    }
    // if(curPos == 0){
    //   prevBtn.setAttribute('disabled', 'true')
    // }
  }
  function next(){
      if (curPos < 6) {
      prevBtn.removeAttribute("disabled")
      postion -= IMAGE_WIDTH;
      hostList.style.transform = `translateX(${postion}%)`;
      curPos += 1;
          
        console.log(curPos);
    }
    // if(curPos == 3){
    //     nextBtn.setAttribute('disabled', 'true')
    // }
  }
   
  function init(){
    // prevBtn.setAttribute('disabled', 'true')
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
  }
   
  init();