<?php
$servername = "localhost";
$username = "root";
$password = ""; // Ensure this matches your MySQL root password
$dbname = "healthcare";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Additional configurations if necessary
?>
