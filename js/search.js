// 헤더- 스크롤시 헤더 고정
const localNav = document.querySelector('.local-nav');

function scrollFunc(){
    if(scrollY >= 80){
        localNav.classList.add("fixed");
    }else{
        localNav.classList.remove("fixed");
    } 
}
document.addEventListener('scroll', scrollFunc);


// 헤더- local-nav 필터
const modalBtn = document.querySelectorAll('.modal-tab');
for(let i = 0; i < modalBtn.length; i++){
    const filterBtn = modalBtn[i].querySelector('button');
    
    filterBtn.addEventListener('click', ()=>{
        let j = 0,
            k = 0;
        while(j < modalBtn.length && k < modalBtn.length){
            modalBtn[j++].querySelector('.modal').classList.remove('active');
            modalBtn[k++].querySelector('button').classList.remove('active');
        }
        modalBtn[i].querySelector('.modal').classList.add('active');
        modalBtn[i].querySelector('button').classList.add('active');

        (window.onresize = function(e){
            if(window.innerWidth < 769){
                document.querySelector('body').style.overflow ="hidden";
            }else {
                document.addEventListener('scroll', ()=>{
                    modalBtn[i].querySelector('.modal').classList.remove('active');
                })
            }
        })();
    })
}

function closeModal(event){
    const closeBtn = event.currentTarget;
    closeBtn.parentNode.classList.remove('active');
    if(window.innerWidth < 769){
        document.querySelector('body').style.overflow ="";
    }
}

// nav - modal
// modal-date
function dateCheck(){
    const dateBtn = document.querySelectorAll('.schedule-cont.date button');
    for(let i = 0;  i < dateBtn.length; i++){
        dateBtn[i].addEventListener('click', ()=>{
            let j = 0;
            while(j < dateBtn.length){
                dateBtn[j++].classList.remove('active');
            }
            dateBtn[i].classList.add('active');
        })
    }
}
dateCheck();

// modal-month
function check(event){
    const checkBtn = event.currentTarget;
    checkBtn.classList.toggle('active');
}

function monthCheck(){
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    let sumMonth = 0;
    let sumYear = year;

    const monthBtn = document.querySelectorAll('.schedule-cont.month button');
    for(i = 0; i < monthBtn.length; i++){
        sumMonth = month + i;
        if(sumMonth >= 12){
            sumMonth -= 12;
            if(sumMonth == month){
                sumYear = year;
            } else {
                sumYear = year + 1;
            }
        }
        
        const viewMonth = monthBtn[i].querySelector('strong');
        const viewYear = monthBtn[i].querySelector('span');
        viewMonth.innerText = `${sumMonth + 1}월`;
        viewYear.innerText = `${sumYear}`;
    }
};
monthCheck();


// main- slide - start
const contentItem = document.querySelectorAll('.cont-item');

for(let i = 0; i < contentItem.length; i++){

    let curPos = 0;
    let position = 0;
    let start_x, end_x;
    const prevBtn = contentItem[i].querySelector('.img-slide .prev-btn');
    const nextBtn = contentItem[i].querySelector('.img-slide .next-btn');
    const slideList = contentItem[i].querySelector('.slide ul');
    const slideItem = contentItem[i].querySelectorAll('.slide ul li');
    const IMAGE_WIDTH = 100 / slideItem.length;

    slideList.addEventListener('touchstart', touch_start);
    slideList.addEventListener('touchend', touch_end);

    // Add pagination dynamically
    const pagination = contentItem[i].querySelector('.pagination');
    const startNum = 0;

    let pageChild = '';
    for(let j = 0; j < slideItem.length; j++){
        if (j === startNum){
            pageChild += `<li class="dot dot_active" data-index="${j}"><a href="#"></a></li>`;
        }else {
            pageChild += `<li class="dot" data-index="${j}"><a href="#"></a></li>`;
        }
    }
    pagination.innerHTML = pageChild;
    const pageDots = pagination.querySelectorAll('.dot');


    function prev(){
        if(curPos > 0){
            nextBtn.removeAttribute('disabled');
            position += IMAGE_WIDTH;
            slideList.style.transform = `translateX(${position}%)`;
            curPos = curPos - 1;
        }
        if(curPos == 0){
            prevBtn.setAttribute('disabled', 'true');
        }

        //pagination
        let j = 0;
        while(j < slideItem.length){
            pageDots[j++].classList.remove('dot_active');
        }
        pageDots[curPos].classList.add('dot_active');
    }

    function next(){
        if(curPos < slideItem.length - 1){
            prevBtn.removeAttribute('disabled');
            position -= IMAGE_WIDTH;
            slideList.style.transform = `translateX(${position}%)`;
            curPos = curPos + 1;
        }
        if(curPos == slideItem.length - 1){
            nextBtn.setAttribute('disabled', 'true');
        }
        
        //pagination
        let j = 0;
        while(j < slideItem.length){
            pageDots[j++].classList.remove('dot_active');
        }
        pageDots[curPos].classList.add('dot_active');
    }

    function touch_start(event){
        start_x = event.touches[0].pageX;
    }
    function touch_end(event){
        end_x = event.changedTouches[0].pageX;
        if(start_x > end_x){
            next();
        } else {
            prev();
        }
    }

    function init(){
        prevBtn.setAttribute('disabled', 'true');
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
    };
    init();
}

// main- slide - end
document.addEventListener('scroll', ()=>{
    if(window.innerWidth < 769 && document.getElementById('mobileNav').classList.contains('active')){
        document.querySelector('.map-btn').style.bottom = "70px";
    }else {
        document.querySelector('.map-btn').style.bottom = "30px";
    }
})