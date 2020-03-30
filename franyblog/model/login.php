<?php
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
 ini_set( 'display_errors', 1 );
 error_reporting( E_ALL );

$email =  $dataObject->email;
$password = $dataObject->password;

 if($email == "gusta@multiplica.com" && $password == "1234"){
     echo 1;
 }else{
     echo 0;
 }
 
 

?>