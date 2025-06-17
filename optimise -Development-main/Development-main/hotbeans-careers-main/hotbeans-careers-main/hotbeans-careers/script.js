function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for applying! We will review your application shortly.');
  }
  

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default submit so we can validate and show confirmation

    const form = event.target;

    // Trigger Bootstrap validation styles
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return; // stop submission if form is invalid
    }

    // If we get here, form is valid
    alert('Thank you for applying! We will review your application shortly.');

    
});
