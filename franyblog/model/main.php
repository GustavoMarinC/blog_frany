<?php
 ini_set( 'display_errors', 1 );
 error_reporting( E_ALL );
    $correo =  $_POST['correo'];
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];
    $from = "franyblog@franylife.com";
    $to = "gmarin.sybven@gmail.com";


    $subject = $_POST['asunto'];

    $message = 'Nombre: '.$nombre.PHP_EOL.'Correo: '.$correo.PHP_EOL.$mensaje;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";