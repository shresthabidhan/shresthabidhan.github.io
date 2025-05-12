// Navigation Scroll Effect
// toggle 'scrolled' class in header for bg color change
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});



// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Project Filter
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    const projectCategory = project.dataset.category;
    if (category === 'all' || projectCategory === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    alert('Please enter a valid email address');
    email.focus();
  }
});



// Add to script.js
document.querySelectorAll('.nav-links a').forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Add to script.js
const darkModeToggle = document.createElement('div');
darkModeToggle.id = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

