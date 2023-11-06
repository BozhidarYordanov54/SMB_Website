<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require 'PHPMailer\PHPMailer\src\PHPMailer.php';
   require 'PHPMailer\PHPMailer\src\Exception.php';
   require 'PHPMailer\PHPMailer\src\SMTP.php';
   
   $mail = new PHPMailer;
   
   $mail->isSMTP();
   $mail->Host = 'mail.smb-vt.com';
   $mail->Port = 587;
   $mail->SMTPSecure = 'tls';
   $mail->SMTPAuth = true;
   $mail->Username = 'noreply@smb-vt.com';
   $mail->Password = 'UPC!^t3NWtq1';
   
   $mail->setFrom('noreply@smb-vt.com', 'СМБ - Велико Търново');
   $mail->addAddress($email, $parentName);  // Имейл от формата
   
   $mail->Subject = "Потвърждение на регистрация за $contestantName";
   $mail->Body = "Уважаем $parentName,\n\nБлагодарим Ви, че регистрирахте $contestantName за събитието. Детайли:\nТелефонен номер: $phoneNumber\nИмейл: $email\nГрад: $city\nУчилище: $schoolName\n\nОчакваме с нетърпение Вашето участие.";
   
   if ($mail->send()) {
       
       header("Location: index.html");
   } else {
       
       header("Location: index.html");
   }
   

?>
