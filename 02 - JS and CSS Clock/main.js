const handHour = document.querySelector('.hour-hand');
const handMinute = document.querySelector('.minute-hand');
const handSecond = document.querySelector('.second-hand');

function moveHands() {
    const now = new Date();
    let secondDegree = ((now.getSeconds() / 60) * 360) + 90;
    handSecond.style.transform = `rotate(${secondDegree}deg)`;

    let minuteDegree = ((now.getMinutes() / 60) * 360) + 90;
    handMinute.style.transform = `rotate(${minuteDegree}deg)`;

    let hourDegree = ((now.getHours() / 12) * 360) + 90;
    handHour.style.transform = `rotate(${hourDegree}deg)`;
}

moveHands();
setInterval(moveHands, 1000);