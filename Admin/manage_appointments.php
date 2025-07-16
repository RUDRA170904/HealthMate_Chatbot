<?php
session_start();
require_once "config.php";

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $appointment_id = $_POST['appointment_id'];
    if (isset($_POST['approve'])) {
        $stmt = $conn->prepare("UPDATE appointments SET status = 'Approved' WHERE id = ?");
        $stmt->execute([$appointment_id]);
    } elseif (isset($_POST['reject'])) {
        $stmt = $conn->prepare("UPDATE appointments SET status = 'Rejected' WHERE id = ?");
        $stmt->execute([$appointment_id]);
    }
}

try {
    $appointments = $conn->query("SELECT a.id, p.name as patient_name, d.name as doctor_name, a.appointment_time, a.status 
                                  FROM appointments a 
                                  JOIN patients p ON a.patient_id = p.id 
                                  JOIN doctors d ON a.doctor_id = d.id")->fetchAll();
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Appointments</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body { font-family: Arial, sans-serif; text-align: center; background: #f4f4f4; }
        .sidebar { width: 250px; height: 100vh; background: #333; color: white; position: fixed; top: 0; left: 0; padding: 20px; }
        .sidebar h2 { text-align: center; margin-bottom: 30px; }
        .sidebar ul { list-style: none; padding: 0; }
        .sidebar ul li { margin: 20px 0; }
        .sidebar ul li a { color: white; text-decoration: none; font-size: 18px; display: flex; align-items: center; }
        .sidebar ul li a i { margin-right: 10px; }
        .sidebar ul li a:hover { background: #575757; padding-left: 10px; transition: 0.3s; }
        .main-content { margin-left: 270px; padding: 20px; }
        .header { display: flex; justify-content: space-between; align-items: center; background: #007bff; color: white; padding: 10px 20px; }
        .header h1 { margin: 0; }
        .header .logout { background: #ff4d4d; padding: 10px 20px; border: none; cursor: pointer; color: white; }
        .list-group { margin-top: 20px; }
        .list-group-item { display: flex; justify-content: space-between; align-items: center; }
        .list-group-item button { background: none; border: none; cursor: pointer; font-size: 1.2em; }
        .list-group-item button.add { color: green; }
        .list-group-item button.remove { color: red; }
    </style>
</head>
<body>

<div class="sidebar">
    <h2>Admin Panel</h2>
    <ul>
        <li><a href="admin_dashboard.php"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
        <li><a href="manage_doctors.php"><i class="fas fa-user-md"></i> Manage Doctors</a></li>
        <li><a href="add_doctor.php"><i class="fas fa-user-plus"></i> Add Doctor</a></li>
        <li><a href="manage_appointments.php"><i class="fas fa-calendar-alt"></i> Manage Appointments</a></li>
        <li><a href="secure_password_reset.php"><i class="fas fa-lock"></i> Secure Password Reset</a></li>
        <li><a href="logout.php"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
    </ul>
</div>

<div class="main-content">
    <div class="header">
        <h1>Manage Appointments</h1>
        <button class="logout" onclick="window.location.href='logout.php'">Logout</button>
    </div>
    <ul class="list-group">
        <?php foreach ($appointments as $appointment) : ?>
        <li class="list-group-item">
            <span><?php echo htmlspecialchars($appointment['patient_name']); ?> - <?php echo htmlspecialchars($appointment['doctor_name']); ?> - <?php echo htmlspecialchars($appointment['appointment_time']); ?></span>
            <div>
                <form method="POST" style="display:inline;">
                    <input type="hidden" name="appointment_id" value="<?php echo $appointment['id']; ?>">
                    <button class="add" name="approve"><i class="fas fa-check"></i></button>
                    <button class="remove" name="reject"><i class="fas fa-times"></i></button>
                </form>
            </div>
        </li>
        <?php endforeach; ?>
    </ul>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
