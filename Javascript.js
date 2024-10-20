document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // This is where you'd send the data to the server
    console.log(`Appointment request: ${name}, ${email}, ${phone}, ${date}, ${message}`);

    alert('Your appointment request has been submitted!');
    this.reset(); // Reset the form
});
