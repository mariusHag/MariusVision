const translations = {
    en: {
        title: "My Portfolio",
        portfolioTitle: "My Work",
        workDescription1: "Project description in English.",
        workDescription2: "Another project description in English.",
        contactTitle: "Get a Quote",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Project Details:",
        submitButton: "Submit",
        footerText: "© 2024 My Portfolio",
        aboutTitle: "Who I Am",
        aboutDescription: "Add a brief introduction about yourself here...",
        homeLink: "Home",
        aboutLink: "About Me",
        workLink: "My Work"
    },
    es: {
        title: "Mi Portafolio",
        portfolioTitle: "Mi Trabajo",
        workDescription1: "Descripción del proyecto en español.",
        workDescription2: "Otra descripción del proyecto en español.",
        contactTitle: "Solicitar un Presupuesto",
        nameLabel: "Nombre:",
        emailLabel: "Correo Electrónico:",
        messageLabel: "Detalles del Proyecto:",
        submitButton: "Enviar",
        footerText: "© 2024 Mi Portafolio",
        aboutTitle: "Quién Soy",
        aboutDescription: "Agrega una breve introducción sobre ti aquí...",
        homeLink: "Inicio",
        aboutLink: "Sobre Mí",
        workLink: "Mi Trabajo"
    },
    da: {
        title: "Min Portfolio",
        portfolioTitle: "Mit Arbejde",
        workDescription1: "Projektbeskrivelse på dansk.",
        workDescription2: "En anden projektbeskrivelse på dansk.",
        contactTitle: "Få et Tilbud",
        nameLabel: "Navn:",
        emailLabel: "E-mail:",
        messageLabel: "Projekt Detaljer:",
        submitButton: "Indsend",
        footerText: "© 2024 Min Portfolio",
        aboutTitle: "Hvem Jeg Er",
        aboutDescription: "Tilføj en kort introduktion om dig selv her...",
        homeLink: "Hjem",
        aboutLink: "Om Mig",
        workLink: "Mit Arbejde"
    }
};

function setLanguage(language) {
    localStorage.setItem('language', language);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    document.getElementById("language-select").value = savedLanguage;
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the specific URL
            window.location.href = "https://mariushag.github.io/MariusVision/index.html";
        } else {
            // Handle error
            alert("There was a problem with your submission. Please try again.");
        }
    })
    .catch(error => {
        // Handle fetch error
        alert("There was a problem with your submission. Please try again.");
    });
}
