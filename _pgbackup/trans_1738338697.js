document.addEventListener('DOMContentLoaded', function() {
    console.log("Translation script loaded!"); // Debugging

    const translations = {
        en: {
            homeTitle: "Marius-Vision",
            introTitle: "From concept to reality<br>Imagine it, and I’ll bring it to life.",
            introText: "Whether it's a logo, CGI, or a product photo, I develop visuals that capture your ideas with accuracy and sensibility.<br>Below you can explore my portfolio.",
            footerText: "© 2025 Marius Vision"
        },
        es: {
            homeTitle: "Marius-Vision",
            introTitle: "Del concepto a la realidad<br>Imagínalo, y lo haré realidad.",
            introText: "Ya sea un logotipo, CGI o una foto de producto, desarrollo imágenes que capturan tus ideas con precisión y sensibilidad.<br>Abajo puedes explorar mi portafolio.",
            footerText: "© 2025 Marius Vision"
        },
        da: {
            homeTitle: "Marius-Vision",
            introTitle: "Fra koncept til virkelighed<br>Forestil dig det, og jeg vil gøre det til virkelighed.",
            introText: "Uanset om det er en logo, CGI eller et produktfoto, udvikler jeg visuelle elementer, der fanger dine ideer med præcision og følsomhed.<br>Nedenfor kan du udforske mit portefølje.",
            footerText: "© 2025 Marius Vision"
        }
    };

    function applyTranslation(lang) {
        console.log("Applying language:", lang); // Debugging
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
                console.log(`Updated: ${key} → ${translations[lang][key]}`);
            }
        });
    }

    document.querySelectorAll('.flag').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');
            applyTranslation(lang);
        });
    });

    // Default language
    applyTranslation('en');
});
