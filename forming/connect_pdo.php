<?php
error_reporting(-1);
ini_set('display_errors', 'On');
session_start();
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = ''; 
$db = 'examform';

try{
    $conn = new PDO("mysql:host=$dbhost;dbname=$db", $dbuser, $dbpass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch (PDOException $e){
    echo  $e->getMessage();
    return;
}
?>
