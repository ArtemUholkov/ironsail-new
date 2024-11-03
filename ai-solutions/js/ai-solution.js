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
