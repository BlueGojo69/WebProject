// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (const link of anchorLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Retrieve form values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Perform form validation
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Create an object with form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  
  // Perform form submission logic
  // You can send the form data to a server or perform other actions here
  
  // Clear form inputs after submission
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  
  alert('Form submitted successfully!');
});
