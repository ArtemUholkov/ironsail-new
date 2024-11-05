document.querySelectorAll('.expand-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
        document.querySelectorAll('.slider__container').forEach((container) => {
            container.classList.remove('expanded');
            container.classList.add('collapsed');
            void container.offsetWidth;
        });
        const parentContainer = event.currentTarget.closest('.slider__container');
        parentContainer.classList.remove('collapsed');
        parentContainer.classList.add('expanded');
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