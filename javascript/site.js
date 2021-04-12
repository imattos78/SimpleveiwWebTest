const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.text');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const active = document.querySelector('.active');
  // Remove current class
  current.classList.remove('current');
  active.classList.remove('active');
  // Check for next slide
  if (current.nextElementSibling && active.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
    active.nextElementSibling.classList.add('active');
  } else {
    // Add current to start
    slides[0].classList.add('current');
    texts[0].classList.add('active');
  }
  setTimeout(() => current.classList.remove('current', 'active'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const active = document.querySelector('.active');

  // Remove current class
  current.classList.remove('current');
  active.classList.remove('active');

  // Check for prev slide
  if (current.previousElementSibling && active.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
    active.previousElementSibling.classList.add('active');

  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
    texts[texts.length -1].classList.add('active');
  }
  setTimeout(() => current.classList.remove('current', 'active'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(prevSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// // Navbar Menu
var modal = document.getElementById('myModal');
    
// Get pseudoelement to open Modal
var btn = document.getElementById("sized");

// Get the <span> element to close Modal
var span = document.getElementsByClassName("close")[0];

// When user clicks button, open Modal
btn.onclick = function() {
   modal.style.display = "block";
   };

// When user clicks Close (x), close Modal
span.onclick = function() {
   modal.style.display = "none";
   };

// When user clicks anywhere outside of the Modal, close Modal
 window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
       }
    }