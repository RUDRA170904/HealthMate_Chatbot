document.addEventListener('DOMContentLoaded', function() {
    const medicationForm = document.getElementById('medication-form');
    const medicationResult = document.getElementById('medication-result');
    const medicationText = document.getElementById('medication-text');

    medicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const medicationName = document.getElementById('medication-name').value;
        const medicationTime = document.getElementById('medication-time').value;
        // Simulate an API call to set medication reminders
        setTimeout(() => {
            medicationText.textContent = `Reminder set for ${medicationName} at ${medicationTime}.`;
            medicationResult.style.display = 'block';
        }, 1000);
    });
});
