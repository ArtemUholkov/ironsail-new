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
