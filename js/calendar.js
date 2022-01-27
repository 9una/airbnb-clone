//Date 객체 생성
let date = new Date();

const renderCalendar = () => {
    const viewYear = date.getFullYear(),
            viewMonth = date.getMonth(),
            viewNextMonth = date.getMonth() + 1;

    //year-month & next-year-month 채우기
    const yearMonth = document.querySelector('.year-month');
    yearMonth.textContent = `${viewYear}년 ${viewMonth + 1}월`;

    const nextYearMonth = document.querySelector('.next-year-month');
    nextYearMonth.textContent = `${viewYear}년 ${viewNextMonth + 1}월`;
    if(viewNextMonth == 12){
        nextYearMonth.textContent = `${viewYear + 1}년 ${viewNextMonth - 11}월`;
    }

    //지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0),
            thisLast = new Date(viewYear, viewMonth + 1, 0),
            prevNextLast = new Date(viewYear, viewNextMonth, 0),
            thisNextLast = new Date(viewYear, viewNextMonth + 1, 0);

    const PLDate = prevLast.getDate(),
            PLDay = prevLast.getDay(),
            PLNextDate = prevNextLast.getDate(),
            PLNextDay = prevNextLast.getDay();

    const TLDate = thisLast.getDate(),
            TLDay = thisLast.getDay(),
            TLNextDate = thisNextLast.getDate(),
            TLNextDay = thisNextLast.getDay();

    //Dates 기본 배열들
    const prevDates = [],
            thisDates = [...Array(TLDate + 1).keys()].slice(1),
            nextDates = [],
            prevNextDates = [],
            thisNextDates = [...Array(TLNextDate + 1).keys()].slice(1),
            nextNextDates = [];


    //prevDates 계산
    if(PLDay != 6){
        for(let i = 0; i < PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    };
    if(PLNextDay != 6){
        for(let i = 0; i < PLNextDay + 1; i++){
            prevNextDates.unshift(PLNextDate - i);
        }
    };

    //nextDates 계산
    for(let i = 1; i < 7 - TLDay; i++){
        nextDates.push(i);
    };
    for(let i = 1; i < 7 - TLNextDay; i++){
        nextNextDates.push(i);
    };

    //Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates),
            datesNext = prevNextDates.concat(thisNextDates, nextNextDates);

    //Dates 정리
    const firstDateIndex = dates.indexOf(1),
            lastDateIndex = dates.lastIndexOf(TLDate),
            firstNextDateIndex = datesNext.indexOf(1),
            lastNextDateIndex = datesNext.lastIndexOf(TLNextDate);

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other';

        dates[i] = `<button type="button" class="date ${condition}">${date}</button>`;
    });

    datesNext.forEach((date, i) => {
        const condition = i >= firstNextDateIndex && i < lastNextDateIndex + 1
            ? 'this'
            : 'other';

        datesNext[i] = `<button type="button" class="date ${condition}">${date}</button>`;
    });

    //Dates 그리기
    document.querySelector('.dates').innerHTML = dates.join('');
    document.querySelector('.next-month-dates').innerHTML = datesNext.join('');

    // 오늘 날짜 그리기
    const today = new Date();
    if(viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        for(let date of document.querySelectorAll('.this')){
            if(+date.innerText === today.getDate()){
                date.classList.add('today');
                break;
            }
        }
    }

    //오늘보다 과거 날짜 -> other
    if(viewYear == today.getFullYear()){
        //지금 년도인 경우
        if(viewMonth == today.getMonth()){
            for(let date of document.querySelectorAll('.dates .this')){
                if(+date.innerText < today.getDate()){
                    date.className = "date other";
                }
            }
        }
        if(viewMonth < today.getMonth()){
            if(viewNextMonth == today.getMonth()){
                //viewNextMonth가 지금 월인 경우
                for(let date of document.querySelectorAll('.dates .this')){
                    date.className = "date other";
                }
                for(let date of document.querySelectorAll('.next-month-dates .this')){
                    if(+date.innerText < today.getDate()){
                        date.className = "date other";
                    }
                    if(+date.innerText === today.getDate()){
                        date.classList.add('today');
                        break;
                    }
                }
                console.log(':)');
            }
            if(viewNextMonth < today.getMonth()){
                //viewNextMonth가 지금 월보다 작음
                for(let date of document.querySelectorAll('.this')){
                    date.className = "date other";
                }
            }
        }
    }
    if(viewYear < today.getFullYear()){
        //지금 년도보다 과거
        for(let date of document.querySelectorAll('.this')){
            date.className = "date other";
        }
    }
};
renderCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};
const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};
const goToday = () => {
    date = new Date();
    renderCalendar();
};