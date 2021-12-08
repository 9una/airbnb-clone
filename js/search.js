// 헤더- 스크롤시 헤더 고정
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


// 헤더- local-nav 필터
const filterSection = document.querySelectorAll('.modal-tab');
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

function closeModal(event){
    const closeBtn = event.currentTarget;
    closeBtn.parentNode.classList.remove('active');
}

// nav - modal
// modal-when
function check(event){
    const checkBtn = event.currentTarget;
    checkBtn.classList.toggle('active');
}

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