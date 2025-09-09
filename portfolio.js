
// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


const text = "Al_amin";
const typedText = document.getElementById("typed-text");

text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("letter");
    span.style.animationDelay = `${i * 0.2}s`; // stagger effect
    typedText.appendChild(span);
});

const paragraph = document.getElementById("typed-paragraph");
const text1 = paragraph.textContent;
paragraph.textContent = ""; // পুরানো text remove

text1.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char; // preserve spaces
  span.classList.add("paragraph-letter");
  span.style.animationDelay = `${i * 0.02}s`; // stagger timing
  paragraph.appendChild(span);
});

