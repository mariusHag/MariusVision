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
    let previousHeight = window.innerHeight;

    function setFullHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set height on initial load
    setFullHeight();

    // Only recalculate height if a true resize happens (e.g., turning the screen, or resizing the browser window)
    window.addEventListener('resize', function() {
        const currentHeight = window.innerHeight;

        // Recalculate height only if the window height changes significantly
        // Prevent recalculating during scroll-induced changes (e.g., address bar hiding in mobile browsers)
        if (Math.abs(currentHeight - previousHeight) > 100) {
            setFullHeight();
            previousHeight = currentHeight; // Update the stored height
        }
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
        header1: "Let’s bring your vision to life!",
        text1: "At Marius Vision, I create stunning still images that capture your ideas and enhance your brand. Every visual element on this website is designed by me, showcasing my dedication to quality. I invite you to explore my portfolio below, where you’ll find examples of my work. I’m eager to learn about your project and discuss how we can turn your vision into reality. Don’t hesitate to reach out—I’m here to help you every step of the way!

",        
        // Add all other translations here...
    },
    es: {
        languageLabel: "Idioma",
        homeTitle: "Marius-Vision",
        homeDescription: "Transformando ideas creativas en imágenes impresionantes.",
        readMoreButton: "Leer Más",
        ScrollDown: "Desliza hacia abajo ↓",
        header1: "¡Tu visión hecha realidad!",
        text1:"En Marius Vision, creo impresionantes imágenes estáticas que capturan tus ideas y mejoran tu marca. Cada elemento visual en este sitio web está diseñado por mí, mostrando mi dedicación a la calidad. Te invito a explorar mi portafolio a continuación, donde encontrarás ejemplos de mi trabajo. Estoy ansioso por conocer tu proyecto y discutir cómo podemos convertir tu visión en realidad. No dudes en contactarme—¡estoy aquí para ayudarte en cada paso del camino!"
        // Add all other translations here...
    },
    da: {
        languageLabel: "Sprog",
        homeTitle: "Marius-Vision",
        homeDescription: "Forvandler kreative ideer til fantastiske billeder.",
        readMoreButton: "Læs Mere",
        ScrollDown: "Scroll ned ↓",
        header1: "Din vision gjort til virkelighed!",
        text1:"Hos Marius Vision skaber jeg fantastiske stillbilleder, der fanger dine idéer og styrker dit brand. Hvert visuelle element på denne hjemmeside er designet af mig, hvilket viser min dedikation til kvalitet. Jeg inviterer dig til at udforske mit portfolio nedenfor, hvor du finder eksempler på mit arbejde. Jeg er ivrig efter at høre om dit projekt og diskutere, hvordan vi kan gøre din vision til virkelighed. Tøv ikke med at kontakte mig – jeg er her for at hjælpe dig hele vejen!"
        // Add all other translations here...
    }
};
