let movingButton = document.getElementById('moving-button');
let updateClicks = document.querySelector('.clicks');
let start = document.getElementById('start-game');
let hiddenCounter = document.querySelector('.hidden-counter');
let countDownNumber = document.querySelector('.countdown');
let buttonWindow = document.querySelector('.button-window');
let clicks = 0;
let timer = 30;

function countDown(){
    let intervalID = setInterval(function(){
        if(timer === 0){
            buttonWindow.classList.add('hidden');
            clearInterval(intervalID);
            alert('countdown reached 0. Final score is :' + clicks);
        }else{
            timer--;
        }
        countDownNumber.innerHTML = timer;
    }, 1000);
};

movingButton.addEventListener('mouseenter', function(){
    moveBox();
});

movingButton.addEventListener('click', function(){
    clicks++;
    updateClicks.innerHTML = clicks;
});

function moveBox(){
    setTimeout(function(){
        movingButton.style.top = (Math.random() * 300) + 1 + 'px';
        movingButton.style.left = (Math.random() * 1700) + 1 + 'px';
    }, 150);
};

start.addEventListener('click', function(){
    hiddenCounter.classList.remove('hidden');
    start.style.display = 'none';
    buttonWindow.classList.remove('hidden');
    countDown();
});
