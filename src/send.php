<?php

$userName = $_POST['userName'];
$controlUserName = $_POST['controlUserName'];
$footerUserName = $_POST['footerUserName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$controlUserPhone = $_POST['controlUserPhone'];
$footerUserPhone = $_POST['footerUserPhone'];
$footerUserQuestion = $_POST['footerUserQuestion'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'denispetrenko34repair@gmail.com';                     // SMTP username
    $mail->Password   = 'repairpass256';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('denispetrenko34repair@gmail.com', 'Денис');
    $mail->addAddress('victordudash@yandex.ua');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName} || ${controlUserName} || ${footerUserName}<br>Телефон пользователя: ${userPhone} || ${controlUserPhone} || ${footerUserPhone}<br>Почта пользователя: ${userEmail}<br>Вопрос пользователя: ${footerUserQuestion}";

    if($mail->send()) {
        // header('Location: thanks.html');
        echo 'ok';
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
