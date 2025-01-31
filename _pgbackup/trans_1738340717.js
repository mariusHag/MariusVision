// translation.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Translation script loaded');
    
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
        architecturalConceptsTitle: "Marius Vision is more than just realism. Explore my architectural concepts and illustrations that merge creativity with a deep attention to atmosphere, including my unique Viking longhouse concept.",
        longhouseTitle: "The Longhouse",
        longhouseDescription: "Architectural Concepts. I create architectural concepts that balance emotion and functionality, using illustrations, renders, and 3D models to bring ideas to life. One example is my modern reinterpretation of a Viking longhouse, blending traditional elements with a bold, imposing façade to create a striking composition. I am particularly drawn to creating spaces that guide occupants through immersive experiences, while also addressing the intricate balance between complexity and cohesion. This interplay of emotion, functionality, and thoughtful design is what fuels my dedication to architecture.",
        teahouseTitle: "The Teahouse",
        teahouseDescription: "The Teahouse weaves together traditional Middle Eastern arches with modern materials like glass brick, balanced by raw textures of nature. It began as a personal challenge to step beyond my comfort zone, exploring how age-old forms could harmonize with contemporary elements through careful design and rendering. Here, rugged stone and smooth glass meet not as opposites, but as collaborators.",
        residenceByTheSeaTitle: "Residence by the sea",
        residenceByTheSeaDescription: "This design centers on original forms built from clean geometry. To emphasize the simplicity of the shapes, I added a reflecting pool. The reflecting pool mirrors the geometry, amplifying the interplay of shapes through light and stillness.",
        feedbackTitle: "Feedback from clients.",
        feedbackEladyam: "★★★★★ Review from fiverr Very open to the creative process and patient. Very happy with the results, always.",
        feedbackAnneMarie: "★★★★★ Review from fiverr Outstanding experience. Understood the project, excellent quality delivery, fast, professional and anticipated issues and fixed them in advance - Thank you",
        feedbackRextom: "★★★★★ Review from fiverr Great artist, listens good to my wishes. Patient and very acurate. Love to work with you. Till next time!",
        feedbackEli87: "★★★★★ Review from fiverr Buena comunicación y trabajo excelente",
        feedbackKingsanam: "★★★★★ Review from fiverr Whatever vision you have he will make it happen. Friendly and quick replies.",
        feedbackAndrewBarriault: "★★★★☆ Review from fiverr I didn't get exactly what I was looking for, but that was mostly due to my poor communication/unfamiliarity with the service.",
        feedbackOlephb: "★★★★★ Review from fiverr WOOOOW! This guy is awesome! Made a couple of pretty fabulous characters for my website! This is... simply the best for this type of work! Thank you man, i love it!",
        letsCreateSomethingAmazingTitle: "Let's Create Something Amazing!",
        letsCreateSomethingAmazingText: "Have a vision? I'm here to transform your ideas into stunning visuals - from logos and CGI to product photography. Get started with a free concept sketch and only move forward if it captures your vision perfectly. Drop me a message anytime - I'm excited to hear about your project and typically respond within 24 hours.",

        },
        es: {
            // Spanish translations go here
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
        architecturalConceptsTitle: "Marius Vision es más que solo realismo. Explora mis conceptos arquitectónicos e ilustraciones que fusionan creatividad con una profunda atención al ambiente, incluyendo mi concepto único de una casa larga vikinga.",
        longhouseTitle: "La Casa Larga",
        longhouseDescription: "Conceptos Arquitectónicos. Creo conceptos arquitectónicos que equilibran emoción y funcionalidad, utilizando ilustraciones, renders y modelos 3D para dar vida a las ideas. Un ejemplo es mi reinterpretación moderna de una casa larga vikinga, combinando elementos tradicionales con una fachada audaz e imponente para crear una composición impactante. Me siento particularmente atraído por crear espacios que guíen a los ocupantes a través de experiencias inmersivas, mientras también abordo el delicado equilibrio entre complejidad y cohesión. Esta interacción de emoción, funcionalidad y diseño reflexivo es lo que alimenta mi dedicación a la arquitectura.",
        teahouseTitle: "La Casa de Té",
        teahouseDescription: "La Casa de Té entrelaza arcos tradicionales del Medio Oriente con materiales modernos como ladrillos de vidrio, equilibrados por texturas crudas de la naturaleza. Comenzó como un desafío personal para ir más allá de mi zona de confort, explorando cómo formas antiguas podrían armonizar con elementos contemporáneos a través de un diseño cuidadoso y renderizado. Aquí, la piedra rugosa y el vidrio liso no se encuentran como opuestos, sino como colaboradores.",
        residenceByTheSeaTitle: "Residencia junto al mar",
        residenceByTheSeaDescription: "Este diseño se centra en formas originales construidas a partir de geometría limpia. Para enfatizar la simplicidad de las formas, añadí una piscina reflectante. La piscina reflectante refleja la geometría, amplificando la interacción de las formas a través de la luz y la quietud.",
        feedbackTitle: "Comentarios de clientes.",
        feedbackEladyam: "★★★★★ Reseña de fiverr Muy abierto al proceso creativo y paciente. Muy contento con los resultados, siempre.",
        feedbackAnneMarie: "★★★★★ Reseña de fiverr Experiencia sobresaliente. Entendió el proyecto, entrega de alta calidad, rápido, profesional y anticipó problemas y los solucionó de antemano - Gracias",
        feedbackRextom: "★★★★★ Reseña de fiverr Gran artista, escucha bien mis deseos. Paciente y muy preciso. Me encanta trabajar contigo. ¡Hasta la próxima!",
        feedbackEli87: "★★★★★ Reseña de fiverr Buena comunicación y trabajo excelente",
        feedbackKingsanam: "★★★★★ Reseña de fiverr Cualquier visión que tengas, él la hará realidad. Amigable y respuestas rápidas.",
        feedbackAndrewBarriault: "★★★★☆ Reseña de fiverr No obtuve exactamente lo que estaba buscando, pero eso fue principalmente debido a mi mala comunicación/inexperiencia con el servicio.",
        feedbackOlephb: "★★★★★ Reseña de fiverr ¡GUUUUAAAU! ¡Este tipo es increíble! ¡Hizo un par de personajes bastante fabulosos para mi sitio web! Esto es... simplemente lo mejor para este tipo de trabajo! ¡Gracias amigo, me encanta!",
        letsCreateSomethingAmazingTitle: "¡Creemos algo increíble!",
        letsCreateSomethingAmazingText: "¿Tienes una visión? Estoy aquí para transformar tus ideas en visuales impresionantes: desde logotipos y CGI hasta fotografía de productos. Comienza con un boceto de concepto gratuito y solo avanza si captura tu visión perfectamente. Envíame un mensaje en cualquier momento: ¡Estoy emocionado de escuchar sobre tu proyecto y normalmente respondo dentro de las 24 horas!"
        },
        da: {
            introTitle: "Fra koncept til virkelighed<br>Forestil dig det, og jeg vil gøre det til virkelighed.",
            introText: "Uanset om det er en logo, CGI eller et produktfoto...",
        }
    };

    function applyTranslation(lang) {
        console.log('Applying language:', lang);
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            console.log('Translating element:', element, 'with key:', key);
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    document.querySelectorAll('.flag').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Language button clicked:', this.dataset.lang);
            applyTranslation(this.dataset.lang);
        });
    });

    // Initial load
    applyTranslation('en');
});