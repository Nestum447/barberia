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
        name: "Diseño de indicadores y dashboards (Power BI / Excel),",
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
        image: "https://unsplash.com/es/fotos/un-robot-sosteniendo-un-signo-de-dolar-en-la-mano-1gf8BVYmy90"
    },
    {
        id: 4,
        name: "Tratamiento de Barba",
        description: "Recorte, modelado y cuidado completo de barba con productos especializados.",
        price: 18,
        duration: "25 min",
        image: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Corte y Barba",
        description: "Combo completo de corte de cabello y tratamiento de barba.",
        price: 40,
        duration: "60 min",
        image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Tinte para Cabello",
        description: "Aplicación profesional de tinte para cabello con productos de calidad.",
        price: 35,
        duration: "45 min",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Imágenes para la galería
const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
