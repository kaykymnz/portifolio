/**
 * gallery.js — Modal de galeria com carrossel
 *
 * Uso no HTML — passe só o caminho da pasta do projeto:
 *   loadGallery('../images/apolo-veiculos/');
 *
 * As imagens devem se chamar img1.png, img2.png, img3.png...
 * O loop para automaticamente quando não encontrar a próxima.
 */

function loadGallery(folder) {
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];

  function probImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload  = () => resolve(src);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  async function discoverImages() {
    const images = [];
    let i = 1;

    while (true) {
      let found = null;

      for (const ext of extensions) {
        const src = `${folder}img${i}.${ext}`;
        const result = await probImage(src);
        if (result) { found = result; break; }
      }

      if (!found) break;
      images.push(found);
      i++;
    }

    return images;
  }

  discoverImages().then(initGallery);
}

function initGallery(images) {
  const heroInner   = document.querySelector('.hero-gallery-inner');
  const heroTrack   = document.querySelector('.hero-gallery-track');
  const heroThumbs  = document.querySelector('.hero-gallery-thumbs');
  const heroPrev    = document.querySelector('.hero-arrow.prev');
  const heroNext    = document.querySelector('.hero-arrow.next');

  const modal        = document.querySelector('.gallery-modal');
  const modalTrack   = document.querySelector('.gallery-modal-track');
  const modalThumbs  = document.querySelector('.gallery-modal-thumbs');
  const modalPrev    = document.querySelector('.modal-arrow.prev');
  const modalNext    = document.querySelector('.modal-arrow.next');
  const modalClose   = document.querySelector('.gallery-modal-close');
  const modalCounter = document.querySelector('.gallery-modal-counter');

  if (!images || images.length === 0) {
    const gallery = document.querySelector('.hero-gallery');
    if (gallery) gallery.style.display = 'none';
    return;
  }

  let heroCurrent  = 0;
  let modalCurrent = 0;

  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Screenshot ${i + 1}`;
    heroTrack.appendChild(img);

    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `Miniatura ${i + 1}`;
    if (i === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => goHero(i));
    heroThumbs.appendChild(thumb);
  });

  if (images.length === 1) {
    heroPrev.style.display = 'none';
    heroNext.style.display = 'none';
  }

  function goHero(index) {
    heroCurrent = (index + images.length) % images.length;
    heroTrack.style.transform = `translateX(-${heroCurrent * 100}%)`;
    heroThumbs.querySelectorAll('img').forEach((t, i) =>
      t.classList.toggle('active', i === heroCurrent)
    );
  }

  heroPrev.addEventListener('click', (e) => { e.stopPropagation(); goHero(heroCurrent - 1); });
  heroNext.addEventListener('click', (e) => { e.stopPropagation(); goHero(heroCurrent + 1); });
  heroInner.addEventListener('click', () => openModal(heroCurrent));

  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Screenshot ${i + 1}`;
    modalTrack.appendChild(img);

    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `Miniatura ${i + 1}`;
    thumb.addEventListener('click', () => goModal(i));
    modalThumbs.appendChild(thumb);
  });

  if (images.length === 1) {
    modalPrev.style.display = 'none';
    modalNext.style.display = 'none';
  }

  function goModal(index) {
    modalCurrent = (index + images.length) % images.length;
    modalTrack.style.transform = `translateX(-${modalCurrent * 100}%)`;
    modalThumbs.querySelectorAll('img').forEach((t, i) =>
      t.classList.toggle('active', i === modalCurrent)
    );
    modalCounter.textContent = `${modalCurrent + 1} / ${images.length}`;
  }

  function openModal(index) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    goModal(index);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalPrev.addEventListener('click', () => goModal(modalCurrent - 1));
  modalNext.addEventListener('click', () => goModal(modalCurrent + 1));
  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  goModal(modalCurrent - 1);
    if (e.key === 'ArrowRight') goModal(modalCurrent + 1);
    if (e.key === 'Escape')     closeModal();
  });

  goHero(0);
  goModal(0);
}
