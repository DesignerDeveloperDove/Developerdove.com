<?php



$to = "dove51903@gmail.com";



$name = trim($_POST["name"] ?? "");
$SirName = trim($_POST["Sir name"] ?? "");
$email = trim($_POST["email"] ?? "");
$service = trim($_POST["service"] ?? "");
$message = trim($_POST["message"] ?? "");



if (
    empty($name) ||
    empty($SirName) ||
    empty($email) ||
    empty($service) ||
    empty($message)
) {

    die("Please fill out all required fields.");

}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    die("Please enter a valid email address.");

}




$subject = "Site Innquery From" . $name;



$emailBody = "

Here is the sich!

Name:
$name

Email:
$email



Service:
$service


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
