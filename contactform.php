<?php
    // Collect form data
    $firstName = $_POST['first-name'];
    $lastName = $_POST["last-name"];
    $email = $_POST["email-contact"];
    $phoneNumber = $_POST["phone-number"];
    $message = $_POST["message"];
    
    // Set up email parameters
    $to = "smb-vt-support@smb-vt.com"; // Replace with your email address
    $subject = "Ново съобщение от $firstName $lastName";
    $headers = "From: $email";
    
    // Compose the email message
    $emailMessage = "Име: $firstName $lastName\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Тел. номер: $phoneNumber\n";
    $emailMessage .= "Съобщение:\n\n$message";
    
    // Send the email
    $success = mail($to, $subject, $emailMessage, $headers);
    
    if ($success) {
        header("Location: index.html");
        exit();
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

?>
