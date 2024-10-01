document.addEventListener("DOMContentLoaded", function() {
    // Check if language is stored in localStorage, default to 'en'
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang); // Set initial language based on stored preference or default
    updateActiveFlag(lang); // Highlight the current language

    // Add event listeners to the flag buttons
    document.querySelectorAll(".flag").forEach(flag => {
        flag.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const selectedLang = this.dataset.lang;
            localStorage.setItem("lang", selectedLang); // Store the selected language
            setLanguage(selectedLang); // Change the language
            updateActiveFlag(selectedLang); // Update the active flag
        });
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function updateActiveFlag(lang) {
    // Remove the 'active' class from all flags
    document.querySelectorAll(".flag").forEach(flag => {
        flag.classList.remove("active");
    });

    // Add the 'active' class to the selected flag
    const selectedFlag = document.querySelector(`.flag[data-lang="${lang}"]`);
    if (selectedFlag) {
        selectedFlag.classList.add("active");
    }
}


const translations = {
    en: {
        languageLabel: "Language",
        homeTitle: "My Portfolio",
        homeDescription: "At Marius Vision, I’m dedicated to turning your creative ideas into stunning still images.",
        readMoreButton: "Read More",
        // Add all other translations here...
    },
    es: {
        languageLabel: "Idioma",
        homeTitle: "Mi Portafolio",
        homeDescription: "Transformando ideas creativas en imágenes impresionantes.",
        readMoreButton: "Leer Más",
        // Add all other translations here...
    },
    da: {
        languageLabel: "Sprog",
        homeTitle: "Min Portefølje",
        homeDescription: "Forvandler kreative ideer til fantastiske billeder.",
        readMoreButton: "Læs Mere",
        // Add all other translations here...
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Check if language is stored in localStorage, default to 'en'
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang); // Set initial language based on stored preference or default

    // Add event listeners to the flag buttons
    document.querySelectorAll(".flag").forEach(flag => {
        flag.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const selectedLang = this.dataset.lang;
            localStorage.setItem("lang", selectedLang); // Store the selected language
            setLanguage(selectedLang); // Change the language
        });
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
