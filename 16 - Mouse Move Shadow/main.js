const hero = document.querySelector('.hero');
const content = hero.querySelector('h1');
const walk = 100;

function generateRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    content.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(${generateRandom(0, 255)},0,0)`;
}

hero.addEventListener('mousemove', shadow);