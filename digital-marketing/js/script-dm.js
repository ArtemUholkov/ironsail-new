const DMselectors = document.querySelectorAll('.dm-selector_item');
const DMcontents = document.querySelectorAll('.dm_sel_cont_item_wrapper');

DMselectors.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove 'active_selector' from all selectors
    DMselectors.forEach((i) => i.classList.remove('active_selector'));

    // Hide all content blocks with fade-out
    DMcontents.forEach((content) => {
      content.classList.remove('fade-in');
      content.style.display = 'none';
    });

    // Add 'active_selector' to the clicked selector
    item.classList.add('active_selector');

    // Show and animate the corresponding content block
    DMcontents[index].style.display = 'block';
    setTimeout(() => DMcontents[index].classList.add('fade-in'), 10);
  });
});
document.querySelector('#item3').click();
