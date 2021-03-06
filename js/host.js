const header = document.getElementById("host__header");

function scrollFunc(){
    if(window.innerWidth >= 769){
        //769px 이상(desktop ~ ): 100vh 스크롤시 헤더 고정
        if(scrollY >= window.innerHeight){
            //window.innerHeight = 100vh
            header.classList.add("fixed");
        }else{
            header.classList.remove("fixed");
        }
    } else {
        //769px 이하
        header.classList.remove("fixed");
    }
}

document.addEventListener('scroll', scrollFunc);
window.addEventListener('resize', scrollFunc); //리사이징시


//slider
let curPos = 1;
let position = 0;
let IMG_WIDTH = 16.7;
const prevBtn = document.querySelector('.host-list__prev');
const nextBtn = document.querySelector('.host-list__next');
const images = document.querySelector('.host-list')
const item = images.querySelectorAll('.host-list li');

if (window.innerWidth < 1025){
    item[1].classList.remove('active');
    item[0].classList.add('active');
    prevBtn.setAttribute('disabled', 'true');
    curPos = 0;
}

function prev(){
    if(curPos > 0){
        nextBtn.removeAttribute("disabled");
        position += IMG_WIDTH;
        images.style.transform = `translateX(${position}%)`;
        curPos = curPos - 1;

        let i = curPos;
        while(i < item.length){
            item[i++].classList.remove('active');
        }
        item[curPos].classList.add('active');
    }
    if(curPos == 0){
        prevBtn.setAttribute('disabled', 'true')
    }
}

function next(){
    if(curPos < 5){
        prevBtn.removeAttribute("disabled");
        position -= IMG_WIDTH;
        images.style.transform = `translateX(${position}%)`;

        let i = curPos;
        while(i < item.length){
            item[i++].classList.remove('active');
        }
        curPos = curPos + 1;
        item[curPos].classList.add('active');
        
    }
    if(curPos == 5){
        nextBtn.setAttribute('disabled', 'true')
    }
}

function init(){
    prevBtn.setAttribute('disabled', true);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
}


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