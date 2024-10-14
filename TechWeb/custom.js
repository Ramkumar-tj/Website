// Smooth form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-status').textContent = "Please fill in all fields.";
        document.getElementById('form-status').style.color = 'red';
    } else {
        document.getElementById('form-status').textContent = "Thank you for reaching out!";
        document.getElementById('form-status').style.color = 'green';
    }
});
