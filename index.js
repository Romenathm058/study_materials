// // Tap feedback effect on cards and buttons
// document.querySelectorAll('.card, .button').forEach(el => {
//   el.addEventListener('click', function() {
//     this.style.transform = 'scale(0.98)';
//     setTimeout(() => {
//       this.style.transform = '';
//     }, 200);
//   });
// });

// // Back to Top button
// const backToTopBtn = document.createElement('button');
// backToTopBtn.id = 'backToTop';
// backToTopBtn.textContent = '↑';
// Object.assign(backToTopBtn.style, {
//   position: 'fixed',
//   bottom: '20px',
//   right: '20px',
//   background: '#2b4eff',
//   color: 'white',
//   border: 'none',
//   borderRadius: '50%',
//   width: '50px',
//   height: '50px',
//   fontSize: '20px',
//   cursor: 'pointer',
//   display: 'none',
//   boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//   zIndex: '99',
// });
// document.body.appendChild(backToTopBtn);

// window.addEventListener('scroll', () => {
//   backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
// });

// backToTopBtn.addEventListener('click', () => {
//   window.scrollTo({top: 0, behavior: 'smooth'});
// });
// function revealOnScroll() {
//   document.querySelectorAll('.reveal').forEach(function(el){
//     const windowHeight = window.innerHeight;
//     const elementTop = el.getBoundingClientRect().top;
//     const elementVisible = 60;

//     if(elementTop < windowHeight - elementVisible) {
//       el.classList.add('active');
//     } else {
//       el.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('DOMContentLoaded', revealOnScroll);

// Tap feedback effect on cards and buttons (desktop + mobile)
document.querySelectorAll('.card, .button').forEach(el => {
  // Mouse
  el.addEventListener('mousedown', function () {
    this.style.transform = 'scale(0.98)';
  });
  el.addEventListener('mouseup', function () {
    this.style.transform = '';
  });
  el.addEventListener('mouseleave', function () {
    this.style.transform = '';
  });
  // Touch
  el.addEventListener('touchstart', function () {
    this.style.transform = 'scale(0.98)';
  });
  el.addEventListener('touchend', function () {
    this.style.transform = '';
  });
});

// Back to Top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.textContent = '↑';
backToTopBtn.setAttribute('aria-label', 'Back to top');
Object.assign(backToTopBtn.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: '#2b4eff',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '20px',
  cursor: 'pointer',
  display: 'none',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  zIndex: '99',
});
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Reveal on scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(function(el){
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 60;
    if(elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
const contactForm = document.getElementById('contactForm');
const popupMessage = document.getElementById('popup-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm("service_kr86gfq", "template_onfoelq", this)
    .then(function () {
      popupMessage.style.display = "block";
      setTimeout(() => {
        popupMessage.style.display = "none";
      }, 4000);
      contactForm.reset();
    }, function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
// Dark mode toggle
const darkSwitch = document.getElementById('darkSwitch');

// Set initial state from localStorage
if(localStorage.getItem('makaut_darkmode') === 'true') {
  document.body.classList.add('dark-mode');
  darkSwitch.checked = true;
} else {
  darkSwitch.checked = false;
}

darkSwitch.addEventListener('change', function() {
  if(this.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('makaut_darkmode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('makaut_darkmode', 'false');
  }
});
