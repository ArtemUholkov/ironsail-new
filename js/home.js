document.querySelectorAll('.expand-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
        document.querySelectorAll('.slider__container').forEach((container) => {
            container.classList.add('collapsed');
            container.classList.remove('expanded');
        });
        const parentContainer = event.currentTarget.closest('.slider__container');
        parentContainer.classList.add('expanded');
        parentContainer.classList.remove('collapsed');
    });
});
