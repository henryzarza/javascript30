function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playingSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

window.addEventListener('keydown', playingSound);
document.querySelectorAll('.key').forEach(element => element.addEventListener('transitionend', removeTransition));