const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height + 'px',
        width: dropdownCoords.width + 'px',
        top: (dropdownCoords.top - navCoords.top) + 'px',
        left: (dropdownCoords.left - navCoords.left) + 'px'
    }
    background.style.setProperty('width', coords.width);
    background.style.setProperty('height', coords.height);
    background.style.setProperty('transform', `translate(${coords.left}, ${coords.top})`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));