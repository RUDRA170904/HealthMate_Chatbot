document.addEventListener('DOMContentLoaded', function() {
    const symptomForm = document.getElementById('symptom-form');
    const assessmentResult = document.getElementById('assessment-result');
    const resultText = document.getElementById('result-text');

    symptomForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const symptom = document.getElementById('symptom').value;
        // Simulate an API call to assess symptoms
        setTimeout(() => {
            resultText.textContent = `Based on your symptoms (${symptom}), it is recommended to seek medical attention.`;
            assessmentResult.style.display = 'block';
        }, 1000);
    });
});
