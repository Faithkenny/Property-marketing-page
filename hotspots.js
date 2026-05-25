const hotspots = document.querySelectorAll('.hotspot');

const modal = document.getElementById('hotspotModal');

const modalTitle =
  document.querySelector('.hotspot-modal__title');

const modalDescription =
  document.querySelector('.hotspot-modal__description');

const modalImage =
  document.querySelector('.hotspot-modal__image');

const closeButton =
  document.querySelector('.hotspot-modal__close');

const overlay =
  document.querySelector('.hotspot-modal__overlay');


// OPEN MODAL
hotspots.forEach(hotspot => {

  hotspot.addEventListener('click', () => {

    const title =
      hotspot.dataset.title;

    const description =
      hotspot.dataset.description;

    const image =
      hotspot.dataset.image;

    modalTitle.textContent = title;

    modalDescription.textContent =
      description;

    modalImage.src = image;

    modal.classList.add('active');

    document.body.style.overflow = 'hidden';
  });

});


// CLOSE MODAL
function closeModal() {

  modal.classList.remove('active');

  document.body.style.overflow = '';
}

closeButton.addEventListener(
  'click',
  closeModal
);

overlay.addEventListener(
  'click',
  closeModal
);


// ESCAPE KEY CLOSE
window.addEventListener('keydown', e => {

  if (
    e.key === 'Escape' &&
    modal.classList.contains('active')
  ) {
    closeModal();
  }

});