// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // No es necesario ocultar las secciones
    // Todas las secciones ya están visibles por defecto
});

// Función para actualizar la navegación
function updateNavigation(sectionId) {
    // Remover active de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
    });

    // Activar el enlace correspondiente en la navegación principal
    const navLink = document.querySelector(`.nav-menu .nav-link[data-section="${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
}

// Gestión de la navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtener la sección seleccionada
        const sectionId = link.getAttribute('data-section');
        const selectedSection = document.getElementById(sectionId);

        // Desplazar suavemente a la sección seleccionada
        selectedSection.scrollIntoView({ behavior: 'smooth' });

        // Actualizar la navegación
        updateNavigation(sectionId);
    });
});

// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mostrar u ocultar el menú al hacer clic en el icono de menú hamburguesa
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Redirigir al hacer clic en el logo
const logo = document.querySelector('.logo a');

logo.addEventListener('click', (e) => {
    e.preventDefault();

    // Desplazar al inicio de la página
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

    // Actualizar la navegación para home
    updateNavigation('home');

    // Cerrar el menú hamburguesa si está abierto
    if (menuToggle && navMenu) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Verificar el estado del envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status === 'success') {
        alert('¡Mensaje enviado con éxito!');
    } else if (status === 'error') {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
});


