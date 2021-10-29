'use strict';
let numb = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let nowScore = 20;
console.log(numb);

document.querySelector('#enter').addEventListener('click', function () {
    document.querySelector('#score_now').textContent = String(nowScore);
    if (nowScore < 0) {
        document.querySelector('.message').textContent = "You are dumb as fuck ";
        return;
    }
    const guess = Number(document.querySelector('.num').value);
    if (guess < 0 || guess > 20) {
        alert('Enter value between 1 and 20');
        return;
    }
    if (!guess)
        document.querySelector('.message').textContent = "No number :(";
    else if (guess == numb) {
        document.querySelector('.message').textContent = "Correct Guess... 🎺";
        document.querySelector('.message').style.color = '#00ff00';
        document.querySelector('.rand_num').textContent = guess;
        if (nowScore > highScore)
            highScore = nowScore;
        document.querySelector('#high_score').textContent = String(highScore);
        document.querySelector('body').style.backgroundColor = '#800080';
        return;
    }
    else if (guess < numb) {
        document.querySelector('.message').textContent = "Number too low  🔻";
    }
    else if (guess > numb) {
        document.querySelector('.message').textContent = "Number too high 🔺";
    }
    nowScore--;
});


document.querySelector('#again').addEventListener('click', function () {
    document.querySelector('#score_now').textContent = "0";
    document.querySelector('.num').value = null;
    document.querySelector('.rand_num').textContent = "?";
    document.querySelector('.message').textContent = "Start Guessing...";
    nowScore = 20;
    numb = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('.message').style.color = '#F5DEB3';
});