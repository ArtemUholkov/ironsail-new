document.querySelectorAll('.slider__container').forEach((container) => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.slider__container').forEach((item) => {
            item.classList.remove('expanded');
            item.classList.add('collapsed');
        });
        container.classList.remove('collapsed');
        container.classList.add('expanded');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.slider__menu');
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