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
    }
};

function setLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("portfolio-title").textContent = translations[language].portfolioTitle;
    document.getElementById("work-description-1").textContent = translations[language].workDescription1;
    document.getElementById("work-description-2").textContent = translations[language].workDescription2;
    document.getElementById("contact-title").textContent = translations[language].contactTitle;
    document.getElementById("name-label").textContent = translations[language].nameLabel;
    document.getElementById("email-label").textContent = translations[language].emailLabel;
    document.getElementById("message-label").textContent = translations[language].messageLabel;
    document.getElementById("submit-button").textContent = translations[language].submitButton;
    document.getElementById("footer-text").textContent = translations[language].footerText;
}
