document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentResult = document.getElementById('appointment-result');
    const appointmentText = document.getElementById('appointment-text');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const appointmentDate = document.getElementById('appointment-date').value;
        // Simulate an API call to manage appointments
        setTimeout(() => {
            appointmentText.textContent = `Your appointment is scheduled for ${appointmentDate}.`;
            appointmentResult.style.display = 'block';
        }, 1000);
    });
});
