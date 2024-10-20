<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['message']);

    // Use mail() function to send the appointment details (basic example)
    $to = "your-email@example.com";
    $subject = "New Appointment Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Appointment request sent successfully.";
    } else {
        echo "There was an error sending your request.";
    }
}
?>
