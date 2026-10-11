<?php



$to = "dove51903@gmail.com";



$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$company = trim($_POST["company"] ?? "");
$service = trim($_POST["service"] ?? "");
$budget = trim($_POST["budget"] ?? "");
$message = trim($_POST["message"] ?? "");



if (
    empty($name) ||
    empty($email) ||
    empty($service) ||
    empty($message)
) {

    die("Please fill out all required fields.");

}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    die("Please enter a valid email address.");

}




$subject = "New Website Inquiry from " . $name;



$emailBody = "

NEW WEBSITE INQUIRY
===================

Name:
$name

Email:
$email

Company:
$company

Service:
$service

Budget:
$budget

Message:
$message

";



$headers = "From: Website Contact Form <noreply@developerdove.com>\r\n";

$headers .= "Reply-To: $email\r\n";

$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


// SEND part

if (mail($to, $subject, $emailBody, $headers)) {

    // Email sent successfully

    header("Location: Contact.html");
    exit;

} else {

    echo "Sorry, something went wrong. Please try again.";

}

?>
