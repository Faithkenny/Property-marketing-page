const hotspots = document.querySelectorAll('.hotspot');

const modal = document.getElementById('hotspotModal');

const modalTitle =
  document.querySelector('.hotspot-modal__title');

const modalDescription =
  document.querySelector('.hotspot-modal__description');

const modalImage =
  document.querySelector('.hotspot-modal__image');

const modalVideo =
  document.querySelector('.hotspot-modal__video');

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

      const media =
      hotspot.dataset.image;
    
    const extension =
      media.split('.').pop().toLowerCase();
    
    
    // RESET
    modalImage.style.display = 'none';
    
    modalVideo.style.display = 'none';
    
    modalVideo.pause();
    
    
    // VIDEO
    if (
      extension === 'mp4' ||
      extension === 'webm' ||
      extension === 'mov'
    ) {
    
      modalVideo.src = media;
    
      modalVideo.style.display = 'block';
    
      modalVideo.load();
    
    }
    
    
    // IMAGE
    else {
    
      modalImage.src = media;
    
      modalImage.alt = title;
    
      modalImage.style.display = 'block';
    
    }

    modalTitle.textContent = title;

    modalDescription.textContent =
      description;


    modal.classList.add('active');

    document.body.style.overflow = 'hidden';
  });

});


// CLOSE MODAL
function closeModal() {

    modal.classList.remove('active');
  
    modalVideo.pause();
  
    modalVideo.currentTime = 0;
  
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