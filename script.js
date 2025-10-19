document.addEventListener('DOMContentLoaded', function() {
    // Cargar servicios
    loadServices();
    
    // Cargar galería
    loadGallery();
    
    // Cargar equipo
    loadTeam();
    
    // Cargar opciones de servicios en el formulario
    loadServiceOptions();
    
    // Manejar el envío del formulario
    document.getElementById('appointment-form').addEventListener('submit', handleFormSubmit);
    
    // Manejar el menú hamburguesa
    setupMobileMenu();
    
    // Efecto de scroll para el header
    setupScrollHeader();
});

function loadServices() {
    const servicesContainer = document.getElementById('services-container');
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <div class="service-img">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-info">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p class="service-price">$${service.price}</p>
            </div>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });
}

function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.alt}">

            <h3 class="image-title">${image.title}</h3>
            <p class="image-description">${image.description}</p>

            
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

function loadTeam() {
    const teamContainer = document.getElementById('team-container');
    
    teamMembers.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        
        teamMember.innerHTML = `
            <div class="team-member-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <h4>${member.name}</h4>
            <p>${member.position}</p>
        `;
        
        teamContainer.appendChild(teamMember);
    });
}

function loadServiceOptions() {
    const serviceSelect = document.getElementById('service');
    
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = `${service.name} - $${service.price}`;
        serviceSelect.appendChild(option);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
    
    // Aquí normalmente haríamos una petición AJAX para enviar los datos al servidor
    // Por ahora solo mostraremos un mensaje de éxito
    
    alert(`Gracias ${name}, tu cita ha sido reservada. Te esperamos el ${date}.`);
    
    // Resetear el formulario
    e.target.reset();
}

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu ul');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

function setupScrollHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
