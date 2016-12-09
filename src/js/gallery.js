// SLIDER

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function getArrowControls() {
  var ctrlPrev = document.getElementById('prev');
  var ctrlNext = document.getElementById('next');

  ctrlPrev.addEventListener('click', () => {
    plusSlides(-1);
  });

  ctrlNext.addEventListener('click', () => {
    plusSlides(1);
  });
}

function getDotControls() {
  var dots = document.querySelectorAll('.dot');

  for (let dot = 0; dot < dots.length; dot++) {
    let id = dots[dot].id.split('-')[1];
    dots[dot].addEventListener('click', () => {
      currentSlide(id);
    });
  }
}

function autoForward(interval) {
  window.setInterval(() => {
    plusSlides(1);
  }, interval);
}


// MODAL

function setModalTriggers () {
  var imgs = document.querySelectorAll('.gallery-img');
  var modalImg = document.getElementById('modal-img');


  for (let i=0; i < imgs.length; i++) {
    let src = imgs[i].src;
    let id = imgs[i].id.split('-')[1];
    let caption = document.getElementById('text-' +  id);

    imgs[i].addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = src;
    });
  }
}

function setModalClose() {
  var closeBtn = document.getElementById('close');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}


// LOAD FUNCTIONS



var modal = document.getElementById('modal');

getArrowControls();
getDotControls();
autoForward(5000);

setModalTriggers();
// setModalClose();
