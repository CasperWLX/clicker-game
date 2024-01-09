let movingButton = document.getElementById('moving-button');
let updateClicks = document.querySelector('.clicks');
let start = document.getElementById('start-game');
let hiddenCounter = document.querySelector('.hidden-counter');
let clicks = 0;
let timer = 30;

function countDown(){
    document.getElementById('countdown').textContent = timer;
    if(timer === 0){
        alert('Countdown reached 0')

        clearInterval()
    }else{
        timer--;
    }
}

let countDownInterval = setInterval(countDown, 1000);

movingButton.addEventListener('mouseenter', function(){
    moveBox();
});

movingButton.addEventListener('click', function(){
    clicks++;
    updateClicks.innerHTML = clicks;
    moveBox();
});

function moveBox(){
    movingButton.style.top = (Math.random() * 300) + 1 + 'px';
    movingButton.style.left = (Math.random() * 600) + 1 + 'px';
};

start.addEventListener('click', function(){
    hiddenCounter.style.display = 'contents';
});
