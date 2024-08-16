// Language Translations
const translations = {
    en: {
        homeTitle: 'My Portfolio',
        homeLink: 'Home',
        aboutLink: 'About Me',
        workLink: 'My Work',
        portfolioTitle: 'My Work',
        workProject1Title: 'Project 1',
        workDescription1: 'Project description in English.',
        workProject2Title: 'Project 2',
        workDescription2: 'Another project description in English.',
        contactTitle: 'Get a Quote',
        nameLabel: 'Name:',
        emailLabel: 'Email:',
        messageLabel: 'Project Details:',
        submitButton: 'Submit',
        footerText: '© 2024 Marius Vision',
        aboutTitle: 'About Me',
        aboutText1: 'Hello! I am Marius, a web developer.',
        aboutText2: 'I enjoy creating and improving websites.',
        workTitle: 'My Work',
        workDescription: 'Here you can view some of the projects I have worked on.',
    },
    es: {
        homeTitle: 'Mi Portafolio',
        homeLink: 'Inicio',
        aboutLink: 'Sobre Mí',
        workLink: 'Mi Trabajo',
        portfolioTitle: 'Mi Trabajo',
        workProject1Title: 'Proyecto 1',
        workDescription1: 'Descripción del proyecto en español.',
        workProject2Title: 'Proyecto 2',
        workDescription2: 'Otra descripción del proyecto en español.',
        contactTitle: 'Obtener una Cotización',
        nameLabel: 'Nombre:',
        emailLabel: 'Correo Electrónico:',
        messageLabel: 'Detalles del Proyecto:',
        submitButton: 'Enviar',
        footerText: '© 2024 Marius Visión',
        aboutTitle: 'Sobre Mí',
        aboutText1: '¡Hola! Soy Marius, un desarrollador web.',
        aboutText2: 'Disfruto creando y mejorando sitios web.',
        workTitle: 'Mi Trabajo',
        workDescription: 'Aquí puedes ver algunos de los proyectos en los que he trabajado.',
    },
    da: {
        homeTitle: 'Min Portefølje',
        homeLink: 'Hjem',
        aboutLink: 'Om Mig',
        workLink: 'Mit Arbejde',
        portfolioTitle: 'Mit Arbejde',
        workProject1Title: 'Projekt 1',
        workDescription1: 'Projektbeskrivelse på dansk.',
        workProject2Title: 'Projekt 2',
        workDescription2: 'En anden projektbeskrivelse på dansk.',
        contactTitle: 'Få et Tilbud',
        nameLabel: 'Navn:',
        emailLabel: 'E-mail:',
        messageLabel: 'Projekt Detaljer:',
        submitButton: 'Send',
        footerText: '© 2024 Marius Vision',
        aboutTitle: 'Om Mig',
        aboutText1: 'Hej! Jeg er Marius, en webudvikler.',
        aboutText2: 'Jeg nyder at skabe og forbedre hjemmesider.',
        workTitle: 'Mit Arbejde',
        workDescription: 'Her kan du se nogle af de projekter, jeg har arbejdet på.',
    }
};

// Set Language Function
function setLanguage(language) {
    localStorage.setItem('language', language);
    updateText();
}

// Update Text Function
function updateText() {
    const language = localStorage.getItem('language') || 'en';
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[language][key] || '';
    });

    document.getElementById('title').textContent = translations[language].homeTitle;
}

// Handle Flag Clicks
document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        setLanguage(flag.getAttribute('data-lang'));
    });
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    updateText();
});

// Preserve language selection across form submissions
const form = document.getElementById('quote-form');
if (form) {
    form.addEventListener('submit', function () {
        const storedLanguage = localStorage.getItem('language') || 'en';
        localStorage.setItem('selectedLanguage', storedLanguage);
    });
}
