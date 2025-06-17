function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for applying! We will review your application shortly.');
  }
  
document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default submit so you can validate or do something custom

    // Example basic validation: check required fields
    const form = event.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    // Form is valid, you can submit it via AJAX or actually submit it
    // For example, just show an alert or do actual submit:
    alert('Form submitted successfully!');

    // If you want to submit normally (refresh page and POST), remove event.preventDefault()
    // or call form.submit() here.

});
