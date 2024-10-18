const students = [
  {
      name: "Neelima Mehan",
      topic: "Introduction to React hooks",
      sessionTime: "12:00 PM"
  },
  {
      name: "Shubhangi Singh",
      topic: "Introduction to React hooks",
      sessionTime: "3:00 PM"
  },
  {
      name: "Anuj Kumar ",
      topic: "Introduction to React hooks",
      sessionTime: "11:00 AM"
  },
  // Add more mentors based on the website data...
];

// Function to generate mentor cards
function loadMentors() {
  const mentorContainer = document.querySelector('.sessions-awaiting-container');
  mentorContainer.innerHTML = ''; // Clear previous data

  students.forEach(mentor => {
      const card = document.createElement('div');
      card.classList.add('mentor-card');

      card.innerHTML = `
          <div class="mentor-info">
              <p><strong>${mentor.name}</strong></p>
              <p>Requested: Today at ${mentor.sessionTime}</p>
              <p>Topic: ${mentor.topic}</p>
          </div>
          <div>
              <button class="book-session-btn">Accept</button>
              <button class="book-session-btn">Decline</button>
          </div> 
      `;

      mentorContainer.appendChild(card);
  });
}

// Load mentors on page load
document.addEventListener('DOMContentLoaded', loadMentors);