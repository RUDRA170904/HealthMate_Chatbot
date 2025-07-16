# VIT_CHATBOT: Healthcare Chatbot & Virtual Assistant

## Overview

VIT_CHATBOT is a comprehensive Healthcare Chatbot and Virtual Assistant platform designed to enhance patient engagement and streamline healthcare management. The system provides a wide range of features including AI-powered symptom assessment, appointment scheduling, medication management, health education, mental health support, and web-based doctor video consultations. The platform supports multiple user roles such as patients, doctors, and administrators, each with dedicated dashboards and functionalities.

The project leverages modern web technologies for the frontend and backend, integrates with AI models for natural language processing, and supports multilingual capabilities to cater to a diverse user base.

---

## Features

- **AI Chatbot**: Provides 24/7 healthcare support, answers health-related queries, and guides users through various processes.
- **Symptom Assessment**: Users can input symptoms and receive preliminary AI-driven assessments.
- **Appointment Management**: Schedule, reschedule, or cancel appointments with healthcare professionals.
- **Medication Management**: Set medication reminders, track adherence, and manage prescriptions.
- **Health Education**: Access personalized health information and educational resources.
- **Mental Health Support**: Tools and resources for mental health and wellbeing.
- **Video Consultations**: Secure web-based video calls with doctors.
- **Admin Dashboard**: Manage users, doctors, appointments, and system settings.
- **Multilingual Support**: Interface available in English, Hindi, and Gujarati.
- **User Authentication**: Secure registration, login, and profile management.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## Folder Structure

```
VIT_CHATBOT/
├── Admin/
│   ├── add_doctor.php
│   ├── admin_dashboard.php
│   ├── admin_login.php
│   ├── doctors.html
│   ├── manage_doctors.php
│   └── mental_health_support.php
├── AppointmentManagement/
│   ├── appointment_management.html
│   └── js/
├── css/
│   ├── appointment_management.css
│   ├── login.css
│   ├── medication_management.css
│   ├── register.css
│   ├── style.css
│   └── symptom_assessment.css
├── HealthEducation/
│   ├── health_education.html
│   └── js/
├── Images/
│   ├── logo.png
│   └── profile.jpg
├── js/
│   ├── appointment_management.js
│   ├── camera.js
│   ├── login.js
│   ├── medication_management.js
│   ├── register.js
│   ├── script.js
│   ├── symptom_assessment.js
│   └── video_call.js
├── languages/
│   ├── en.json
│   ├── gu.json
│   └── hi.json
├── MedicationManagement/
│   ├── Untitled-1.html
│   └── js/
├── StartWithAudio/
│   ├── .env
│   ├── app.py
│   ├── gradio_app.py
│   ├── om/
│   └── ...
├── StartWithChat/
│   ├── .env
│   ├── app.py
│   ├── connect_memory_with_llm.py
│   ├── create_memor_for_llm.py
│   ├── requirements.txt
│   ├── templates/
│   └── vectorstore/
├── SymptomAssessment/
│   ├── symptom_assessment.html
│   ├── css/
│   └── js/
├── appointment_management.html
├── config.php
├── contact.html
├── healtheducation.html
├── index.html
├── index1.html
├── login.html
├── login.php
├── logout.php
├── medicationmanagement.css
├── medicationmanagement.html
├── medicationmanagement.php
├── medicationmanagement1.php
├── mentalhealth.html
├── payment.html
├── profile.php
├── register.html
├── register.php
├── startwithchat.js
├── Structure.txt
├── symptom_assessment.html
├── userappointment,php.php
├── userappointment.html
└── README.md
```

---

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Backend**: PHP (for user management, appointments, etc.)
- **AI/ML Integration**: Python (Flask, LangChain, Hugging Face, Gradio)
- **Database**: MySQL (for user and appointment data)
- **Vector Store**: FAISS (for document embeddings and retrieval)
- **Environment Management**: dotenv for API keys and configuration
- **Multilingual Support**: JSON language files for English, Hindi, and Gujarati
- **Responsive Design**: Custom CSS and media queries

---

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js and npm (for frontend build, if needed)
- PHP 7.4+
- MySQL Server
- pip (Python package manager)
- Composer (optional, for PHP dependencies)
- XAMPP/WAMP/LAMP stack for local development (recommended)

### Installation Steps

1. **Clone the Repository**

   ```
   git clone https://github.com/yourusername/VIT_CHATBOT.git
   cd VIT_CHATBOT
   ```

2. **Install Python Dependencies**

   ```
   cd StartWithChat
   pip install -r requirements.txt
   ```

   For StartWithAudio:

   ```
   cd ../StartWithAudio
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables**

   - Copy `.env.example` to `.env` in both `StartWithChat` and `StartWithAudio`.
   - Add your Hugging Face, GROQ, and ElevenLabs API keys as needed.

4. **Set Up MySQL Database**

   - Create a database (e.g., `healthmate_db`).
   - Import the provided SQL schema (if available) or create tables for users, appointments, etc.
   - Update database credentials in `config.php` and other PHP files.

5. **Configure Web Server**

   - Place the project folder in your XAMPP/WAMP/LAMP `htdocs` or `www` directory.
   - Start Apache and MySQL services.

6. **Run the Python Backend**

   - For chatbot (text):  
     ```
     cd StartWithChat
     python app.py
     ```
   - For audio/image chatbot:  
     ```
     cd ../StartWithAudio
     python app.py
     ```

7. **Access the Application**

   - Open `http://localhost/VIT_CHATBOT/index.html` in your browser.

---

## Usage

- **User Registration and Login**: Users can register and log in via the web interface.
- **Chatbot Interaction**: Start a chat session for health queries, symptom assessment, or general advice.
- **Appointment Management**: Book, view, or cancel appointments with doctors.
- **Medication Management**: Add medications, set reminders, and track adherence.
- **Health Education**: Search for health topics and receive curated information.
- **Mental Health Support**: Access resources and motivational content.
- **Admin Panel**: Admins can manage doctors, users, and oversee system operations.

---

## Multilingual Support

The platform supports English, Hindi, and Gujarati. Language files are located in the `languages/` directory. Users can switch languages via the UI, and all major UI elements are translated.

---

## AI and LLM Integration

- **Chatbot**: Integrates with Hugging Face models (e.g., Mistral-7B) for natural language understanding and response generation.
- **Document Retrieval**: Uses LangChain and FAISS for semantic search and retrieval of medical information from PDF documents.
- **Audio/Image Chat**: Supports multimodal queries using GROQ and ElevenLabs APIs.

---

## Security

- User data is encrypted and securely stored.
- Authentication and session management are implemented for all user roles.
- API keys and sensitive information are managed via environment variables.

---

## Customization

- **Adding New Languages**: Add a new JSON file in the `languages/` folder and update the language switcher in the UI.
- **Adding New Features**: Extend the backend (PHP/Python) and frontend (JS/HTML) as needed.
- **Styling**: Modify or extend CSS files in the `css/` directory for custom themes.

---

## Contribution Guidelines

1. Fork the repository and create a new branch for your feature or bugfix.
2. Write clear, maintainable code and document your changes.
3. Ensure all new code is covered by appropriate tests.
4. Submit a pull request with a detailed description of your changes.

---

## Troubleshooting

- **Chatbot Not Responding**: Ensure the Python backend is running and accessible at the configured port.
- **Database Errors**: Check MySQL credentials and ensure the database is set up correctly.
- **API Key Issues**: Verify that all required API keys are present in the `.env` files.
- **UI Issues**: Clear browser cache or check for JavaScript errors in the console.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Hugging Face for providing state-of-the-art language models.
- LangChain for document retrieval and semantic search.
- FAISS for efficient vector storage and similarity search.
- Gradio for rapid prototyping of AI interfaces.
- All open-source contributors and libraries used in this project.

---

## Contact

For questions, suggestions, or support, please contact the project maintainers via the contact page or open an issue on GitHub.

---

## Future Roadmap

- Integration with electronic health records (EHR)
- Advanced analytics and reporting for admins
- Mobile app version for Android and iOS
- Integration with wearable health devices
- Enhanced doctor-patient video consultation features
- More languages and regional support

---

## Disclaimer

This chatbot is intended for informational and educational purposes only. It does not provide medical diagnosis or treatment. Always consult a qualified healthcare provider for medical advice.

---

## Project Structure Reference

For a detailed breakdown of the folder and file structure, refer to the `Structure.txt` file included in the repository.


---

Thank you for using and contributing to VIT_CHATBOT. Your feedback and contributions are welcome to help improve the platform
