function showImages(images) {
  // Creare un elemento div per la visualizzazione delle immagini aggiuntive
  var galleryContainer = document.createElement('div');
  galleryContainer.classList.add('gallery-container');

  // Creare un elemento div per le immagini nella galleria
  var galleryImages = document.createElement('div');
  galleryImages.classList.add('gallery-images');

  // Aggiungere immagini all'elemento div
  images.forEach(function(imageSrc) {
    var imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.addEventListener('click', function() {
      document.body.removeChild(galleryContainer);
    });
    galleryImages.appendChild(imgElement);
  });

  // Aggiungere l'elemento div con le immagini al container principale
  galleryContainer.appendChild(galleryImages);

  // Aggiungere pulsanti di navigazione
  var prevButton = document.createElement('button');
  prevButton.innerHTML = '&#10094;'; // Simbolo freccia sinistra
  prevButton.classList.add('prev-button');
  prevButton.addEventListener('click', function() {
    navigateImages(-1);
  });
  galleryContainer.appendChild(prevButton);

  var nextButton = document.createElement('button');
  nextButton.innerHTML = '&#10095;'; // Simbolo freccia destra
  nextButton.classList.add('next-button');
  nextButton.addEventListener('click', function() {
    navigateImages(1);
  });
  galleryContainer.appendChild(nextButton);

  // Aggiungere pulsante di chiusura
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', function() {
    closeGallery(galleryContainer);
  });
  galleryContainer.appendChild(closeButton);

  // Aggiungere l'elemento div principale al corpo del documento
  document.body.appendChild(galleryContainer);
}

function navigateImages(direction) {
  var galleryImages = document.querySelector('.gallery-images');
  var currentScroll = galleryImages.scrollLeft;
  var imageWidth = galleryImages.clientWidth;

  if (direction === 1) {
    galleryImages.scrollLeft = currentScroll + imageWidth;
  } else if (direction === -1) {
    galleryImages.scrollLeft = currentScroll - imageWidth;
  }
}

function playVideoPreview(videoSrc) {
  // Creare un elemento div per la visualizzazione del video
  var videoContainer = document.createElement('div');
  videoContainer.classList.add('gallery-container', 'video-container');

  // Creare un elemento video
  var videoElement = document.createElement('video');
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.autoplay = true; // Avviare automaticamente il video

  // Aggiungere la source al video
  var sourceElement = document.createElement('source');
  sourceElement.src = videoSrc;
  sourceElement.type = 'video/mp4';
  videoElement.appendChild(sourceElement);

  // Aggiungere il video all'elemento div
  videoContainer.appendChild(videoElement);

  // Aggiungere il pulsante di chiusura
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', function() {
    closeGallery(videoContainer);
  });
  videoContainer.appendChild(closeButton);

  // Aggiungere l'elemento div principale al corpo del documento
  document.body.appendChild(videoContainer);

  // Avviare il video
  videoElement.play();

  // Aggiungere gestione per uscire dal video con il tasto ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeGallery(videoContainer);
    }
  });
}

function closeGallery(galleryContainer) {
  // Rimuovere l'elemento del video quando si chiude
  document.body.removeChild(galleryContainer);
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}

// Funzione per riprodurre il suono predefinito del pop-up
function playPopupSound() {
  // Riproduci il suono predefinito del browser (se supportato)
  var audio = new Audio();
  audio.play();
}

// Attiva la ripetizione del video all'infinito
document.getElementById('delivery').addEventListener('loadeddata', function() {
  var pandoroVideo = document.getElementById('pandoroVideo');
  pandoroVideo.play();

  pandoroVideo.addEventListener('ended', function() {
    pandoroVideo.play();
  });
});

function toggleVideo() {
  var pandoroVideo = document.getElementById('pandoroVideo');
  if (pandoroVideo.paused) {
    pandoroVideo.play();
  } else {
    pandoroVideo.pause();
  }
}

document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector(".contact-button a");

    contactButton.addEventListener("click", function() {
        window.location.href = "tel:+393517011705";
    });

    contactButton.addEventListener("touchstart", function() {
        window.location.href = "tel:+393517011705";
    });

    // Altri tuoi script...
});
