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
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInBtn = document.getElementById('signInBtn');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

// Dummy student data
const students = [
    { name: "John Doe", email: "john@example.com", password: "password123" },
    { name: "Jane Smith", email: "jane@example.com", password: "password456" },
    { name: "Sam Johnson", email: "sam@example.com", password: "password789" },
    // Add more dummy students
    { name: "Student 1", email: "student1@example.com", password: "student123" },
    { name: "Student 2", email: "student2@example.com", password: "student456" },
    { name: "Student 3", email: "student3@example.com", password: "student789" },
    {name: 'abc ' , email:'abc@gmail.com' , password:'abc'}
    // ... Add a total of 30 dummy students
];

// Toggle between login and register forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle login validation
signInBtn.addEventListener('click', () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    // Check if the email and password match any student
    const validStudent = students.find(student => student.email === email && student.password === password);

    if (validStudent) {
        alert(`Welcome, ${validStudent.name}!`);
    } else {
        alert('User not registered');
    }
});

