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
    }
};

function setLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("portfolio-title") && (document.getElementById("portfolio-title").textContent = translations[language].portfolioTitle);
    document.getElementById("work-description-1") && (document.getElementById("work-description-1").textContent = translations[language].workDescription1);
    document.getElementById("work-description-2") && (document.getElementById("work-description-2").textContent = translations[language].workDescription2);
    document.getElementById("contact-title") && (document.getElementById("contact-title").textContent = translations[language].contactTitle);
    document.getElementById("name-label") && (document.getElementById("name-label").textContent = translations[language].nameLabel);
    document.getElementById("email-label") && (document.getElementById("email-label").textContent = translations[language].emailLabel);
    document.getElementById("message-label") && (document.getElementById("message-label").textContent = translations[language].messageLabel);
    document.getElementById("submit-button") && (document.getElementById("submit-button").textContent = translations[language].submitButton);
    document.getElementById("footer-text").textContent = translations[language].footerText;
    document.getElementById("about-title") && (document.getElementById("about-title").textContent = translations[language].aboutTitle);
    document.getElementById("about-description") && (document.getElementById("about-description").textContent = translations[language].aboutDescription);
}
