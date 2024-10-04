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

document.addEventListener("DOMContentLoaded", function() {
    function setFullHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setFullHeight(); // Set height on load

    // Recalculate on window resize (in case address bar disappears when scrolling)
    window.addEventListener('resize', setFullHeight);
});


function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Change the image source based on the selected language
    const image = document.querySelector(".container-image");
    if (image) {
        let imagePath = '';

        // Map the language code to the corresponding image file
        switch (lang) {
            case 'en':
                imagePath = 'images/english.svg';
                break;
            case 'es':
                imagePath = 'images/spanish.svg';
                break;
            case 'da':
                imagePath = 'images/danish.svg';
                break;
            default:
                imagePath = 'images/english.svg'; // Fallback to English if unknown
        }

        image.src = imagePath;
    }
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
        homeTitle: "Marius-Vision",
        homeDescription: "At Marius Vision, I’m dedicated to turning your creative ideas into stunning still images.",
        readMoreButton: "Read More",
        ScrollDown: "Scroll down ↓",
        // Add all other translations here...
    },
    es: {
        languageLabel: "Idioma",
        homeTitle: "Marius-Vision",
        homeDescription: "Transformando ideas creativas en imágenes impresionantes.",
        readMoreButton: "Leer Más",
        ScrollDown: "Desliza hacia abajo ↓",
        // Add all other translations here...
    },
    da: {
        languageLabel: "Sprog",
        homeTitle: "Marius-Vision",
        homeDescription: "Forvandler kreative ideer til fantastiske billeder.",
        readMoreButton: "Læs Mere",
        ScrollDown: "Scroll ned ↓",
        // Add all other translations here...
    }
};
