// Information based on the provided link: http://cs.sliet.ac.in/faculty-staff/
const mentors = [
    {
        name: "Dr. (Mrs.) Neelima Mehan",
        position: "Professor",
        img: "https://via.placeholder.com/100",
        sessionTime: "10:00 AM - 12:00 PM"
    },
    {
        name: "Dr. Shubhangi Singh",
        position: "Assistant Professor",
        img: "https://via.placeholder.com/100",
        sessionTime: "1:00 PM - 3:00 PM"
    },
    {
        name: "Dr. Anuj Kumar Gupta",
        position: "Associate Professor",
        img: "https://via.placeholder.com/100",
        sessionTime: "9:00 AM - 11:00 AM"
    },
    // Add more mentors based on the website data...
];

// Function to generate mentor cards
function loadMentors() {
    const mentorContainer = document.querySelector('.mentor-cards-container');
    mentorContainer.innerHTML = ''; // Clear previous data

    mentors.forEach(mentor => {
        const card = document.createElement('div');
        card.classList.add('mentor-card');

        card.innerHTML = `
            <img src="${mentor.img}" alt="Mentor Image" class="prof-image">
            <div class="mentor-info">
                <p><strong>${mentor.name}</strong></p>
                <p>${mentor.position}</p>
                <p>Session Time: ${mentor.sessionTime}</p>
            </div>
            <div>
                <button class="book-session-btn">Book Session</button>
            </div>
        `;

        mentorContainer.appendChild(card);
    });
}

// Load mentors on page load
document.addEventListener('DOMContentLoaded', loadMentors);

// Toggling the star icon
document.getElementById('star-icon').addEventListener('click', function() {
    this.classList.toggle('far'); // Toggle the outline class
    this.classList.toggle('fas'); // Toggle the filled class
    this.classList.toggle('selected'); // Toggle the CSS for filled state
});

// Toggling the bell icon
document.getElementById('bell-icon').addEventListener('click', function() {
    this.classList.toggle('far'); // Toggle the outline class
    this.classList.toggle('fas'); // Toggle the filled class
    this.classList.toggle('selected'); // Toggle the CSS for filled state
});

// Sidebar item selection
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove selected class from all items
        document.querySelectorAll('.sidebar-item').forEach(i => {
            i.classList.remove('selected');
        });
        
        // Add selected class to the clicked item
        this.classList.add('selected');
    });
});

// Hamburger menu functionality
document.getElementById('burger-menu').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Toggle visibility of the sidebar
});

// Optional: If you want to handle clicking outside the sidebar to close it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const burgerMenu = document.getElementById('burger-menu');

    // Check if the click is outside both the sidebar and burger menu
    if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});

// Close sidebar when a link is clicked (useful for smaller screens)
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('active');
    });
});
