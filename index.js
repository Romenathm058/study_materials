// Tap feedback effect on cards and buttons
document.querySelectorAll('.card, .button').forEach(el => {
  el.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
});

// Back to Top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.textContent = '↑';
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

