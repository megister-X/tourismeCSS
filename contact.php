<!DOCTYPE>
<html>
<head>
<meta charset="utf-8">
<title>Document sans nom</title>
</head>

<body>
<?php 
$name = $_POST['name'];
$prenom = $_POST['prenom'];
$entreprise = $_POST['entreprise'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Prenom: $prenom \n Entreprise: $entreprise  \n Message: $message \n Tel: $tel";
$recipient = "votremail@hotmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: https://lightaurore.github.io/tourismeCSS/index.html");
?>
</body>
</html>
