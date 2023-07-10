<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $contestantName = $_POST["contestant-name"];
    $phoneNumber = $_POST["phone-number"];
    $email = $_POST["email"];
    $city = $_POST["city"];
    $schoolName = $_POST["school-name"];

    // Set the recipient email address
    $to = "recipient@example.com";

    // Set the email subject
    $subject = "New Form Submission";

    // Set the email body
    $body = "Name: " . $name . "\n";
    $body .= "Contestant Name: " . $contestantName . "\n";
    $body .= "Phone Number: " . $phoneNumber . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "City: " . $city . "\n";
    $body .= "School Name: " . $schoolName . "\n";

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
