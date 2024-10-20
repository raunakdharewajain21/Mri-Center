document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Here you would typically send the data to a server or an email service
    console.log(`Appointment request: ${name}, ${email}, ${phone}, ${date}`);

    alert('Your appointment request has been submitted!');
    this.reset(); // Reset the form
});
