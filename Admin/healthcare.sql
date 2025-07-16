CREATE DATABASE healthcare;
USE healthcare;

-- Admin Table (Secure password storage)
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Doctors Table
CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255) NOT NULL,
    fees DECIMAL(10,2) NOT NULL,
    contact VARCHAR(255) NOT NULL
);

-- Patients Table
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) NOT NULL
);

-- Appointments Table
CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_time DATETIME NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected', 'Completed') DEFAULT 'Pending',
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);

-- Insert Default Admin (Username: dhruvil, Password: 111)
INSERT INTO admin (username, password_hash, email) VALUES ('dhruvil', SHA2('111', 256), 'admin@example.com');

-- Insert Doctors
INSERT INTO doctors (name, specialization, fees, contact) VALUES 
('Dr. John Doe', 'Cardiologist', 150.00, '123-456-7890'),
('Dr. Jane Smith', 'Neurologist', 200.00, '234-567-8901'),
('Dr. Emily Johnson', 'Dermatologist', 100.00, '345-678-9012'),
('Dr. Michael Brown', 'Pediatrician', 120.00, '456-789-0123'),
('Dr. Sarah Davis', 'Orthopedic', 180.00, '567-890-1234');

-- Insert Patients
INSERT INTO patients (name, email, phone) VALUES 
('Alice Johnson', 'alice@example.com', '123-456-7890'),
('Bob Smith', 'bob@example.com', '234-567-8901'),
('Charlie Brown', 'charlie@example.com', '345-678-9012'),
('David Wilson', 'david@example.com', '456-789-0123'),
('Eva Davis', 'eva@example.com', '567-890-1234');
