document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: {
            introTitle: "From concept to reality\nImagine it, and I’ll bring it to life.",
            introText: "Whether it's a logo, CGI, or a product photo, I develop visuals\nthat capture your ideas with accuracy and sensibility.\nBelow you can explore my portfolio.",
            productPhotosTitle: "Product photos. Without product photography",
            productPhotosDescription: "Through digital artistry and modern techniques, I created these stunning beverage visuals. Without the need for traditional photography. This project demonstrates how digital art can rival conventional photography in commercial applications.",
            projectDescriptionTitle: "Project Description",
            projectDescriptionText: "I set out to explore the possibilities of creating convincing product visuals through pure digital creation. The challenge was to design beverage marketing materials that would look at home in a high-end lifestyle campaign. My goal was to showcase how digital art can create stunning commercial-quality visuals from scratch.",
            sceneDevelopmentTitle: "Scene Development",
            sceneDevelopmentText: "The process begins with selecting lifestyle reference images that serve as the foundation for each piece. I then sketch out compositions, considering factors like perspective, placement, and environmental context. Through multiple iterations, I refine the layout until it provides a solid framework for the detailed work ahead.",
            lightingDepthRefinementTitle: "Lighting & Depth refinement",
            lightingDepthRefinementText: "With the base composition in place, I focus on creating photorealistic lighting and depth. This involves meticulously hand-painting shadows and highlights to match the scene's natural light sources. Special attention goes to how the beverages interact with their environment, adding reflections and subtle color effects.",
            aiEnhancementTitle: "AI enhancement",
            aiEnhancementText: "In the final stage, I enhance specific areas of the image using AI technology, working with small sections at a time. I generate multiple variations based on my original artwork, selecting and refining the most successful elements. This process combines artistic direction with AI capabilities to achieve a high level of photorealism.",
            letsCreateSomethingAmazingTitle: "Let's Create Something Amazing!",
            letsCreateSomethingAmazingText: "Have a vision? I'm here to transform your ideas into stunning visuals - from logos and CGI to product photography. Get started with a free concept sketch and only move forward if it captures your vision perfectly. Drop me a message anytime - I'm excited to hear about your project and typically respond within 24 hours."
        },
        es: {
            introTitle: "De concepto a realidad\nImagínalo, y lo traeré a la vida.",
            introText: "Ya sea un logotipo, CGI o una foto de producto, desarrollo visuales que capturan tus ideas con precisión y sensibilidad.\nA continuación puedes explorar mi portafolio.",
            productPhotosTitle: "Fotos de productos. Sin fotografía de productos",
            productPhotosDescription: "A través del arte digital y técnicas modernas, creé estas impresionantes imágenes de bebidas. Sin necesidad de fotografía tradicional. Este proyecto demuestra cómo el arte digital puede rivalizar con la fotografía convencional en aplicaciones comerciales.",
            projectDescriptionTitle: "Descripción del proyecto",
            projectDescriptionText: "Me propuse explorar las posibilidades de crear visuales de productos convincentes a través de una creación digital pura. El desafío fue diseñar materiales de marketing de bebidas que se verían como en casa en una campaña de estilo de vida de alta gama. Mi objetivo era demostrar cómo el arte digital puede crear visuales de calidad comercial impresionantes desde cero.",
            sceneDevelopmentTitle: "Desarrollo de escenas",
            sceneDevelopmentText: "El proceso comienza con la selección de imágenes de referencia de estilo de vida que sirven como fundamento para cada pieza. Luego bosquejo composiciones, considerando factores como la perspectiva, el posicionamiento y el contexto ambiental. A través de múltiples iteraciones, refino el diseño hasta que proporciona un marco sólido para el trabajo detallado por venir.",
            lightingDepthRefinementTitle: "Refinamiento de iluminación y profundidad",
            lightingDepthRefinementText: "Con la composición base en su lugar, me enfoco en crear iluminación y profundidad fotorrealistas. Esto implica pintar meticulosamente sombras y luces para que coincidan con las fuentes de luz naturales de la escena. Se presta especial atención a cómo las bebidas interactúan con su entorno, añadiendo reflejos y efectos de color sutiles.",
            aiEnhancementTitle: "Mejora mediante IA",
            aiEnhancementText: "En la etapa final, mejoro áreas específicas de la imagen utilizando tecnología de IA, trabajando con pequeñas secciones a la vez. Genero múltiples variaciones basadas en mi obra original, seleccionando y refinando los elementos más exitosos. Este proceso combina dirección artística con capacidades de IA para alcanzar un alto nivel de fotorealismo.",
            letsCreateSomethingAmazingTitle: "¡Creemos algo increíble!",
            letsCreateSomethingAmazingText: "¿Tienes una visión? Estoy aquí para transformar tus ideas en imágenes impresionantes: desde logotipos y CGI hasta fotografía de productos. Comienza con un boceto conceptual gratuito y solo sigue adelante si refleja tu visión perfectamente. Envíame un mensaje en cualquier momento; me emociona conocer tu proyecto y suelo responder en 24 horas."
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.addEventListener('change', function () {
            setLanguage(this.value);
        });
    }

    setLanguage('en'); // Default language
});
