const humanSection = document.querySelector('.resources-section__human');
const programmaticSection = document.querySelector('.resources-section__programmatic');

humanSection.addEventListener('mouseenter', () => {
    programmaticSection.classList.add('blurred');
});

humanSection.addEventListener('mouseleave', () => {
    programmaticSection.classList.remove('blurred');
});

programmaticSection.addEventListener('mouseenter', () => {
    humanSection.classList.add('blurred');
});

programmaticSection.addEventListener('mouseleave', () => {
    humanSection.classList.remove('blurred');
});

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.about__menu');
    menu.style.left = '0px'; 

    const menuOffset = menu.getBoundingClientRect().top + window.scrollY;
    const earlyOffset = 100;

    window.addEventListener('scroll', function () {
        const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;

        if (triggerPoint >= menuOffset) {
            menu.classList.add('sticky');
        } else {
            menu.classList.remove('sticky');
        }
    });
});
