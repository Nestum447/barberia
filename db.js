// Datos de servicios
const services = [
    {
        id: 1,
        name: "Consultoría Empresarial",
        description: `Optimización de procesos y logística, Diagnóstico, rediseño de flujos, reducción de tiempos, costos y mejora de Operaciones, almacenes e inventarios.
      <br>
      <a href="https://github.com/Nestum447/layoutwarehouse" target="_blank" style="color: blue; text-decoration: underline;">
        Caso de estudio
      </a>
    `,
        price: 2500,
        duration: "5 semanas ",   
        image: "https://plus.unsplash.com/premium_photo-1720610706902-f92d98fb8b35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374"
    },
    {
        id: 2,
        name: "Diseño de indicadores y dashboard con analisis de Inteligencia artificial,",
        description: "Un dashboard convierte datos en decisiones inteligentes. Visualizar, Analizar y tomar decisiones rápidamente a partir de datos. Aplicado a Operaciones, Producción, Ventas o calidad.",
        price: 30,
        duration: "45 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
        id: 3,
        name: "Inteligencia Artificial (IA) en gestión financiera y control interno",
        description: "Rentabilidad, costos, flujo de caja, cuentas financieras",
        price: 20,
        duration: "30 min",
        image: "https://plus.unsplash.com/premium_photo-1676637656277-498f73258bec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
    },
    {
        id: 4,
        name: "Implementacion de Tecnologia de la informacion y Mejora continua con metodologías Lean, Kaizen y Six Sigma",
        description: "Integramos la TI y mejora continua con metodologías Lean, Kaizen y Six Sigma, combinando análisis de datos y tecnología para optimizar procesos, reducir costos y maximizar la rentabilidad en toda la organización",
        price: 18,
        duration: "25 min",
        image: "https://plus.unsplash.com/premium_photo-1661443598082-afd740d6d07c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1289"
    },
    {
        id: 5,
        name: "Digitalizamos procesos y automatizamos reportes con Python, basic y machine learning transformando tareas repetitivas en soluciones inteligentes”",
        description: "Llevamos la eficiencia al siguiente nivel mediante la digitalización de procesos y la automatización inteligente de tareas y reportes con Python, visual basic y machine learning. Implementamos soluciones que eliminan errores manuales, reducen tiempos operativos y permiten decisiones basadas en datos en tiempo real.",
        price: 40,
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
    },
    {
        id: 6,
        name: "Soluciones Digitales para tu empresa",
        description: "Aplicaciones web personalizadas.- Sistemas de control de inventario y producción.- Herramientas de predicción y análisis estadístico.- Integración con bases de datos",
        price: 35,
        duration: "45 min",
        image: "https://plus.unsplash.com/premium_photo-1668473366952-45f06fbf6492?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
    }
];

// Imágenes para la galería
const galleryImages = [
    {
        url: "https://raw.githubusercontent.com/Nestum447/barberia/refs/heads/main/20241021_174018.jpg",
        alt: "Corte de cabello estilo moderno"
    },
    {
        url: "https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Afeitado tradicional en barbería"
    },
    {
        url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Tratamiento de barba profesional"
    },
    {
        url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Barbero trabajando en cliente"
    },
    {
        url: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Estilo de barba cuidado"
    },
    {
        url: "https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Corte de cabello con diseño"
    },
    {
        url: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Barbero usando navaja"
    },
    {
        url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "Productos de barbería"
    }
];

// Miembros del equipo
const teamMembers = [
    {
        name: "Carlos Méndez",
        position: "Barbero Principal",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Javier López",
        position: "Especialista en Barbas",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Miguel Ángel",
        position: "Estilista",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];
