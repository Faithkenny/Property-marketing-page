const accordionItems =
  document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {

  const header =
    item.querySelector('.accordion-header');

  header.addEventListener('click', () => {

    const isActive =
      item.classList.contains('active');

    accordionItems.forEach(el => {
      el.classList.remove('active');

      el.querySelector('.accordion-icon')
        .textContent = '+';
    });

    if (!isActive) {

      item.classList.add('active');

      item.querySelector('.accordion-icon')
        .textContent = '−';

    }

  });

});