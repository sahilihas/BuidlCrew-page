// Add your custom JavaScript code here
// For example, you can use JavaScript to handle form submissions or implement additional functionality

// Example: Submit form using AJAX
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form data
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    // Perform AJAX request to submit the form data
    // Replace the URL with the appropriate endpoint on your server
    fetch('submit-form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
    .then(function(response) {
      // Handle response
      if (response.ok) {
        // Display success message or perform desired action
        console.log('Form submitted successfully!');
      } else {
        // Display error message or perform desired action
        console.log('Form submission failed.');
      }
    })
    .catch(function(error) {
      // Handle error
      console.log('An error occurred:', error);
    });
  });
  