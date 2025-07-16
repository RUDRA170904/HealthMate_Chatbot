<?php
$host = "localhost";
$user = "root"; 
$password = "";
$database = "healthcare";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed!"]));
}

?>
