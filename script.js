// Get Navbar and Hero Section Elements
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

// Function to Check Scroll Position
function handleScroll() {
  const heroHeight = hero.offsetHeight; // Height of the hero section

  if (window.scrollY > heroHeight) {
    navbar.classList.add('scrolled'); // Add scrolled class when past hero
  } else {
    navbar.classList.remove('scrolled'); // Remove it when in hero
  }
}

// Attach Scroll Event Listener
window.addEventListener('scroll', handleScroll);
