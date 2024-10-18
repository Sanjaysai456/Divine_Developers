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
            <img src="${mentor.img}" alt="Mentor Image">
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
