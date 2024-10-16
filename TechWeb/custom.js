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
        // Prepare data for emailjs
        var triggerEmail = {
            from_name: name,
            email_Id: email,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send("service_6u1a5z7", "template_xpe070b", triggerEmail)
        .then(function(res) {
            document.getElementById('form-status').textContent = "Kudos 😊, we will be reaching out soon!";
            document.getElementById('form-status').style.color = 'green';
            setTimeout(function() {
                document.getElementById('form-status').textContent = '';
            }, 5000);
        })
        .catch(function(err) {
            document.getElementById('form-status').textContent = "There was an error sending your message.";
            document.getElementById('form-status').style.color = 'red';
            setTimeout(function() {
                document.getElementById('form-status').textContent = '';
            }, 5000);
            console.error('EmailJS error:', err);
        });
    }
});
