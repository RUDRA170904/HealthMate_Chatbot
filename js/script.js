document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const startChat = document.getElementById('start-chat');
    const endChat = document.getElementById('end-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const themeToggle = document.getElementById('theme-toggle');

    startChat.addEventListener('click', () => {
        chatContainer.style.display = 'block';
        startChat.style.display = 'none';
        endChat.style.display = 'block';
        chatInput.disabled = false; // Enable the chat input field
        chatInput.focus(); // Focus on the chat input field
        initializeStartWithChat(); // Initialize StartWithChat project
    });

    endChat.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        startChat.style.display = 'block';
        endChat.style.display = 'none';
        chatInput.disabled = true; // Disable the chat input field
    });

    chatSend.addEventListener('click', async () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatInput.value = '';
            try {
                const response = await fetch('http://localhost:5000/api/chat', { // Ensure this URL is correct for your backend
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query: userMessage })
                });
                if (response.ok) {
                    const data = await response.json();
                    addMessage(data.result, 'bot');
                } else {
                    addMessage('Sorry, something went wrong.', 'bot');
                }
            } catch (error) {
                console.error('Error:', error);
                addMessage('Sorry, something went wrong.', 'bot');
            }
        }
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggle.innerHTML = document.body.classList.contains('light-mode') ? '&#9788' : '🌙';
        updateTheme();
    });
    

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function updateTheme() {
        const elements = document.querySelectorAll('.dropdown-content, .footer, .footer-content, .footer-section, .footer-links a, .chat-container, .chat-header, .chat-body, .chat-footer, .chat-input, .chat-send, .feature, .feature-btn, .doctor, .video-call, .modal-content, .form-container input, .form-container button, .close');
        elements.forEach(element => {
            if (document.body.classList.contains('light-mode')) {
                element.classList.add('light-mode');
            } else {
                element.classList.remove('light-mode');
            }
        });
    }

    document.getElementById('scroll-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('chat-emoji').addEventListener('click', function() {
        chatInput.value += '😊';
    });

    window.loadContent = function(page) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const selectedSection = document.getElementById(page);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }

        // Load profile details if the profile section is selected
        if (page === 'profile') {
            loadProfile();
        }
    };

    window.setLanguage = function(language) {
        alert('Language set to ' + language);
        // Implement language change logic
    };

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            setLanguage(language);
        });
    });

    window.register = function() {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const phone = document.getElementById('register-phone').value;
        const gender = document.getElementById('register-gender').value;
        const dob = document.getElementById('register-dob').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const user = {
            username,
            email,
            password,
            phone,
            gender,
            dob
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        closeModal('register-modal');
    };

    window.login = function() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.username === username && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful!');
            closeModal('login-modal');
            loadProfile();
        } else {
            alert('Invalid username or password!');
        }
    };

    function loadProfile() {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            document.getElementById('profile-username').textContent = user.username;
            document.getElementById('profile-email').textContent = user.email;
            // Add more fields as needed
        }
    }

    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };

    document.getElementById('symptom-assessment-btn').addEventListener('click', startSymptomAssessment);
    document.getElementById('appointment-management-btn').addEventListener('click', manageAppointments);
    document.getElementById('medication-management-btn').addEventListener('click', manageMedications);
    document.getElementById('health-education-btn').addEventListener('click', learnMoreHealthEducation);
    document.getElementById('mental-health-support-btn').addEventListener('click', getMentalHealthSupport);

    function startSymptomAssessment() {
        // Implement symptom assessment logic here
    }

    function manageAppointments() {
        // Implement appointment management logic here
    }

    function manageMedications() {
        // Implement medication management logic here
    }

    function learnMoreHealthEducation() {
        // Implement health education logic here
    }

    function getMentalHealthSupport() {
        // Implement mental health support logic here
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function initializeStartWithChat() {
        // Assuming StartWithChat project has a global function to initialize the chat
        if (typeof StartWithChat !== 'undefined' && typeof StartWithChat.init === 'function') {
            StartWithChat.init();
        } else {
            console.error('StartWithChat project is not loaded or init function is missing.');
        }
    }
});
