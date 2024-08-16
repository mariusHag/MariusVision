// Translations
const translations = {
    en: {
        home: 'Home',
        about: 'About Me',
        work: 'My Work',
        contactTitle: 'Get a Quote',
        nameLabel: 'Name:',
        emailLabel: 'Email:',
        messageLabel: 'Project Details:',
        submitButton: 'Submit'
    },
    es: {
        home: 'Inicio',
        about: 'Sobre Mí',
        work: 'Mi Trabajo',
        contactTitle: 'Solicitar Presupuesto',
        nameLabel: 'Nombre:',
        emailLabel: 'Correo Electrónico:',
        messageLabel: 'Detalles del Proyecto:',
        submitButton: 'Enviar'
    },
    da: {
        home: 'Hjem',
        about: 'Om Mig',
        work: 'Mit Arbejde',
        contactTitle: 'Få et Tilbud',
        nameLabel: 'Navn:',
        emailLabel: 'Email:',
        messageLabel: 'Projekt Detaljer:',
        submitButton: 'Send'
    }
};

// Set Language Function
function setLanguage(language) {
    localStorage.setItem('language', language);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Set Initial Language on Page Load
document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
});

// Handle Language Flag Click
document.querySelectorAll('.language-selector .flag').forEach(flag => {
    flag.addEventListener('click', () => {
        const lang = flag.getAttribute('data-lang');
        setLanguage(lang);
        location.reload(); // Reload the page to apply language changes
    });
});

// Handle Form Submission
document.addEventListener('submit', function(event) {
    if (event.target.matches('#quote-form')) {
        event.preventDefault(); // Prevent default form submission
        
        const form = event.target;
        const formData = new FormData(form);
        const formAction = form.getAttribute('action');
        
        fetch(formAction, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                const currentLang = localStorage.getItem('language') || 'en';
                window.location.href = `https://mariushag.github.io/MariusVision/index.html?lang=${currentLang}`;
            } else {
                alert("There was a problem with your submission. Please try again.");
            }
        })
        .catch(error => {
            alert("There was a problem with your submission. Please try again.");
        });
    }
});
