function clock(){
    const min = document.querySelector('div[data-min="time-min"]');
    let hundredth = 0;
    let timeOuteId;

    function creatHoursOfHundredth(hundred){
        const date = new Date(hundred * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startClock(){
        timeOuteId = setInterval(start, 1000);
    }

    function start(){
        hundredth++;
        min.innerHTML = creatHoursOfHundredth(hundredth);
    }
    function clear(){
        clearInterval(timeOuteId);
    }

    function playStopReset(event){
        const btn = event.target;
        if(btn.classList.contains('bignner')){
            clear();
            startClock();
        }

        if(btn.classList.contains('stop')){
            clear();
        }
        if(btn.classList.contains('reset')){
            clear();
            min.innerHTML = '00:00:00';
            hundredth = 0;
        }
    }

    // event
    document.addEventListener('click', playStopReset);
}


clock();
