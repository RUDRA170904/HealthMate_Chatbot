document.addEventListener('DOMContentLoaded', function() {
    const healthEducationForm = document.getElementById('health-education-form');
    const healthEducationResult = document.getElementById('health-education-result');
    const healthEducationText = document.getElementById('health-education-text');

    healthEducationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const healthTopic = document.getElementById('health-topic').value;
        // Simulate an API call to get health information
        setTimeout(() => {
            healthEducationText.textContent = `Information about ${healthTopic}: [Health information goes here].`;
            healthEducationResult.style.display = 'block';
        }, 1000);
    });

    document.getElementById('health-education-btn').addEventListener('click', function() {
        alert('Starting health education...');
        // Implement health education functionality here
    });
});
