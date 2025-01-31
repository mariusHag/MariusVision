const translations = {
    en: {
        title: "Marius-Vision",
        description: "From concept to reality. Imagine it, and I’ll bring it to life.",
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
        architecturalConceptsTitle: "Architectural Concepts",
        longhouseDescription: "I create architectural concepts that balance emotion and functionality, using illustrations, renders, and 3D models to bring ideas to life. One example is my modern reinterpretation of a Viking longhouse, blending traditional elements with a bold, imposing façade to create a striking composition. I am particularly drawn to creating spaces that guide occupants through immersive experiences, while also addressing the intricate balance between complexity and cohesion. This interplay of emotion, functionality, and thoughtful design is what fuels my dedication to architecture.",
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
        letsCreateSomethingAmazingText: "Have a vision? I'm here to transform your ideas into stunning visuals - from logos and CGI to product photography. Get started with a free concept sketch and only move forward if it captures your vision perfectly. Drop me a message anytime - I'm excited to hear about your project and typically respond within 24 hours."
    },
    es: {
        // Spanish translations go here
        title: "Marius-Vision",
        description: "Desde el concepto hasta la realidad. Imagínalo y lo traeré a la vida.",
        productPhotosTitle: "Fotos de productos. Sin fotografía de productos",
        productPhotosDescription: "A través del arte digital y técnicas modernas, creé estas impresionantes imágenes de bebidas. Sin necesidad de fotografía tradicional. Este proyecto demuestra cómo el arte digital puede rivalizar con la fotografía convencional en aplicaciones comerciales.",
        projectDescriptionTitle: "Descripción del proyecto",
        projectDescriptionText: "Me propuse explorar las posibilidades de crear visuales de productos convincentes a través de una creación digital pura. El desafío fue diseñar materiales de marketing de bebidas que se verían como en casa en una campaña de estilo de vida de alta gama. Mi objetivo era demostrar cómo el arte digital puede crear visuales de calidad comercial impresionantes desde cero.",
        // Add more Spanish translations...
    },
    da: {
        // Danish translations go here
        title: "Marius-Vision",
        description: "Fra koncept til virkelighed. Forestil dig det, og jeg vil bringe det til live.",
        productPhotosTitle: "Produktfotos. Uden produktfotografi",
        productPhotosDescription: "Gennem digital kunstneri og moderne teknikker har jeg skabt disse storslåede bevægelsesvisuelle. Uden behov for traditionel fotografering. Dette projekt demonstrerer, hvordan digital kunst kan konkurrere med konventionel fotografering i kommercielle anvendelser.",
        projectDescriptionTitle: "Projektbeskrivelse",
        projectDescriptionText: "Jeg satte mig for at udforske mulighederne for at skabe overbevisende produktvisuelle gennem ren digital skabelse. Udfordringen var at designe marketingmaterialer til drikkevarer, der ville ligne hjemme i en high-end livsstilskampagne. Målet var at vise, hvordan digital kunst kan skabe storslåede kommersielle kvalitetsvisuelle fra bunden.",
        // Add more Danish translations...
    }
};

function translate(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${language}`);
        }
    });
}

// Default to English on page load
window.onload = function() {
    translate('en');
};