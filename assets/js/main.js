// --- Configuración ---
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Reemplaza con tu ID real de Formspree (p. ej. "xayzabcd")

// --- Menú móvil accesible ---
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    const toggleMenu = () => {
      nav.classList.toggle('show');
      const expanded = nav.classList.contains('show');
      toggle.setAttribute('aria-expanded', String(expanded));
    };
    toggle.addEventListener('click', toggleMenu);
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
  const toggle = document.getElementById('nav-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// --- i18n (ES/EN) ---
const i18n = {
  es: {
    'meta.title': 'Portafolio de Marc',
    'meta.description': 'Portafolio de Marc: Programador Python y Diseñador Web Multimedia. Proyectos, habilidades y contacto.',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.work': 'Trabajos',
    'nav.contact': 'Contacto',
    'home.title': 'Hola, <br>soy <span class="home__title-color">Marc.</span><br> Diseñador<br> Web Multimedia',
    'home.subtitle': 'Desarrollador Python (en formación)',
    'home.cta': 'Contáctame',
    'about.title': 'Sobre mí',
    'about.text': 'Programador Python / Diseñador Web Multimedia\n\nProfesional versátil con una sólida base en diseño multimedia y más de cinco años de experiencia. He dado el salto a la programación con Python y he desarrollado rápidamente un conjunto de habilidades sólido. Aunque no he ocupado un puesto corporativo formal, mi dedicación a la mejora continua se refleja en la realización exitosa de numerosos proyectos personales.',
    'about.byteworks': 'Byteworks es mi iniciativa personal: un conjunto de microproyectos y utilidades enfocadas en automatización, pequeños servicios web y prototipos visuales. Me permite explorar Python (FastAPI/Flask), APIs REST, integración con servicios externos y buenas prácticas de diseño UI/UX.',
    'skills.title': 'Habilidades',
    'skills.text': '<b>Backend (Python):</b> FastAPI/Flask, APIs REST, integración externa, testing básico.<br><b>Frontend:</b> HTML5, CSS3, JavaScript, UI patterns, responsive design.<br><b>Diseño UI/UX:</b> Wireframes, prototipos, accesibilidad, microinteracciones.<br><b>Herramientas:</b> Git/GitHub, Figma, automatización básica, despliegue simple.<br><b>En curso:</b> Mejora continua de Byteworks y nuevos microservicios.',
    'work.title': 'Trabajos',
    'work.byteworks': 'Byteworks — Plataforma de automatización y portfolio de microproyectos',
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar',
    'footer.rights': 'Todos los derechos reservados',
    'form.success': '¡Gracias! Tu mensaje ha sido enviado correctamente.',
    'form.error': 'Ups, hubo un problema al enviar el formulario. Inténtalo de nuevo.',
    'form.configure': 'Configura tu Formspree: reemplaza YOUR_FORM_ID por tu ID real.'
  },
  en: {
    'meta.title': "Marc's Portfolio",
    'meta.description': "Marc's Portfolio: Python Developer and Multimedia Web Designer. Projects, skills and contact.",
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'home.title': "Hi, <br>I'm <span class=\"home__title-color\">Marc.</span><br> Multimedia<br> Web Designer",
    'home.subtitle': 'Python developer (in progress)',
    'home.cta': 'Contact',
    'about.title': 'About Me',
    'about.text': "Python Programmer / Multimedia Web Designer\n\nA versatile professional with a strong foundation in multimedia design and over five years of experience. I transitioned into Python and quickly built a solid skillset. Although I haven't held a formal corporate role, my commitment to self‑improvement shows through many personal projects.",
    'about.byteworks': 'Byteworks is my personal initiative: a set of micro‑projects and utilities focused on automation, small web services, and visual prototypes. It lets me explore Python (FastAPI/Flask), REST APIs, third‑party integrations, and good UI/UX practices.',
    'skills.title': 'Skills',
    'skills.text': '<b>Backend (Python):</b> FastAPI/Flask, REST APIs, integrations, basic testing.<br><b>Frontend:</b> HTML5, CSS3, JavaScript, UI patterns, responsive design.<br><b>UI/UX Design:</b> Wireframes, prototyping, accessibility, micro‑interactions.<br><b>Tools:</b> Git/GitHub, Figma, basic automation, simple deployment.<br><b>In progress:</b> Continuous improvements to Byteworks and new microservices.',
    'work.title': 'Work',
    'work.byteworks': 'Byteworks — Automation platform and micro‑projects portfolio',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send',
    'footer.rights': 'All rights reserved',
    'form.success': 'Thanks! Your message has been sent.',
    'form.error': 'Oops, there was a problem submitting the form. Please try again.',
    'form.configure': 'Configure Formspree: replace YOUR_FORM_ID with your real ID.'
  }
};

function getPreferredLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
  return String(navLang).toLowerCase().startsWith('es') ? 'es' : 'en';
}

function applyI18n(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    if (dict[key] !== undefined) el.setAttribute('value', dict[key]);
  });
  localStorage.setItem('lang', lang);
}

const initialLang = getPreferredLang();
applyI18n(initialLang);
// sin selector de idioma; autodetección por navegador

// --- Animaciones (ScrollReveal) ---
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: false
  });
  sr.reveal('.home__title', {});
  sr.reveal('.button', { delay: 200 });
  sr.reveal('.button1', { delay: 200 });
  sr.reveal('.home__img', { delay: 300 });
  sr.reveal('.home__social-icon', { interval: 150 });
  sr.reveal('.about__img', {});
  sr.reveal('.about__text', { delay: 200 });
  sr.reveal('.skills__text', { delay: 150 });
  sr.reveal('.skills__img', { delay: 250 });
  sr.reveal('.work__img', { interval: 150 });
  sr.reveal('.contact__input', { interval: 150 });
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Formulario (Formspree) ---
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('lang') || initialLang || 'es';
    const dict = i18n[lang] || i18n.es;
    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
      if (formStatus) formStatus.textContent = dict['form.configure'];
      return;
    }
    const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data });
      if (res.ok) {
        if (formStatus) formStatus.textContent = dict['form.success'];
        form.reset();
      } else {
        if (formStatus) formStatus.textContent = dict['form.error'];
      }
    } catch (err) {
      if (formStatus) formStatus.textContent = dict['form.error'];
    }
  });
}
