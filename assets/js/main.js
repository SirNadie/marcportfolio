// --- Configuración ---
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Reemplaza con tu ID real de Formspree (p. ej. "xayzabcd")
// Para configurar Formspree:
// 1. Ve a https://formspree.io y crea una cuenta
// 2. Crea un nuevo formulario
// 3. Copia el ID del formulario (lo verás en la URL o en el código de integración)
// 4. Reemplaza 'YOUR_FORM_ID' arriba con tu ID real

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
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
  const toggle = document.getElementById('nav-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// --- Active Section Highlighting ---
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

// --- i18n (ES/EN) ---
const i18n = {
  es: {
    'meta.title': 'Portafolio de Marc',
    'meta.description':
      'Portafolio de Marc: Programador Python y Diseñador Web Multimedia. Proyectos, habilidades y contacto.',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.work': 'Trabajos',
    'nav.contact': 'Contacto',
    'home.title':
      'Hola, <br>soy <span class="home__title-color">Marc.</span><br> Diseñador<br> Web Multimedia',
    'home.subtitle': 'Desarrollador Python (en formación)',
    'home.cta': 'Contáctame',
    'about.title': 'Sobre mí',
    'about.text':
      'Programador Python / Diseñador Web Multimedia\n\nProfesional versátil con una sólida base en diseño multimedia y más de cinco años de experiencia. He dado el salto a la programación con Python y he desarrollado rápidamente un conjunto de habilidades sólido. Aunque no he ocupado un puesto corporativo formal, mi dedicación a la mejora continua se refleja en la realización exitosa de numerosos proyectos personales.',
    'about.byteworks':
      'ByteWorks es mi iniciativa personal: un conjunto de microproyectos y utilidades enfocadas en automatización, pequeños servicios web y prototipos visuales. Me permite explorar Python (FastAPI/Flask), APIs REST, integración con servicios externos y buenas prácticas de diseño UI/UX.',
    'skills.title': 'Habilidades',
    'skills.backend.title': 'Backend Development',
    'skills.frontend.title': 'Frontend Development',
    'skills.design.title': 'Design & UX',
    'skills.tools.title': 'Tools & Workflow',
    'work.title': 'Trabajos',
    'work.byteworks.title': 'ByteWorks Agency',
    'work.byteworks.description':
      'Diseño y desarrollo web por suscripción para emprendedores y pequeñas empresas. Sitios bilingües con precios transparentes, hosting, SSL y mantenimiento mensual incluido.',
    'work.viewlive': 'Ver Sitio',
    'work.contact': 'Contactar',
    'work.comingsoon': 'Próximamente',
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar',
    'footer.rights': 'Todos los derechos reservados',
    'form.success': '¡Gracias! Tu mensaje ha sido enviado correctamente.',
    'form.error': 'Ups, hubo un problema al enviar el formulario. Inténtalo de nuevo.',
    'form.configure':
      'Configura tu Formspree: reemplaza YOUR_FORM_ID por tu ID real en main.js línea 2.',
  },
  en: {
    'meta.title': "Marc's Portfolio",
    'meta.description':
      "Marc's Portfolio: Python Developer and Multimedia Web Designer. Projects, skills and contact.",
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'home.title':
      'Hi, <br>I\'m <span class="home__title-color">Marc.</span><br> Multimedia<br> Web Designer',
    'home.subtitle': 'Python developer (in progress)',
    'home.cta': 'Contact',
    'about.title': 'About Me',
    'about.text':
      "Python Programmer / Multimedia Web Designer\n\nA versatile professional with a strong foundation in multimedia design and over five years of experience. I transitioned into Python and quickly built a solid skillset. Although I haven't held a formal corporate role, my commitment to self‑improvement shows through many personal projects.",
    'about.byteworks':
      'ByteWorks is my personal initiative: a set of micro‑projects and utilities focused on automation, small web services, and visual prototypes. It lets me explore Python (FastAPI/Flask), REST APIs, third‑party integrations, and good UI/UX practices.',
    'skills.title': 'Skills',
    'skills.backend.title': 'Backend Development',
    'skills.frontend.title': 'Frontend Development',
    'skills.design.title': 'Design & UX',
    'skills.tools.title': 'Tools & Workflow',
    'work.title': 'Work',
    'work.byteworks.title': 'ByteWorks Agency',
    'work.byteworks.description':
      'Subscription-based web design and development for entrepreneurs and small businesses. Bilingual sites with transparent pricing, hosting, SSL, and monthly maintenance included.',
    'work.viewlive': 'View Live',
    'work.contact': 'Contact',
    'work.comingsoon': 'Coming Soon',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send',
    'footer.rights': 'All rights reserved',
    'form.success': 'Thanks! Your message has been sent.',
    'form.error': 'Oops, there was a problem submitting the form. Please try again.',
    'form.configure':
      'Configure Formspree: replace YOUR_FORM_ID with your real ID in main.js line 2.',
  },
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

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-value]').forEach((el) => {
    const key = el.getAttribute('data-i18n-value');
    if (dict[key] !== undefined) el.setAttribute('value', dict[key]);
  });
  localStorage.setItem('lang', lang);
}

const initialLang = getPreferredLang();
applyI18n(initialLang);

// --- Animaciones (ScrollReveal) ---
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: false,
    delay: 100,
  });

  sr.reveal('.home__title', { origin: 'left' });
  sr.reveal('.button', { delay: 200 });
  sr.reveal('.button1', { delay: 200 });
  sr.reveal('.home__img', { delay: 300, origin: 'right' });
  sr.reveal('.home__social-icon', { interval: 150, origin: 'bottom' });

  sr.reveal('.about__img', { origin: 'left' });
  sr.reveal('.about__text', { delay: 200, origin: 'right' });

  sr.reveal('.section-title', { distance: '50px' });
  sr.reveal('.skills__category', { interval: 200, distance: '100px', origin: 'bottom' });

  sr.reveal('.work__img', { interval: 150, distance: '100px', origin: 'bottom' });

  sr.reveal('.contact__info', { origin: 'left' });
  sr.reveal('.contact__form', { origin: 'right' });
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

    // Clear previous status
    formStatus.className = 'form-status';
    formStatus.textContent = '';

    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
      formStatus.className = 'form-status error';
      formStatus.textContent = dict['form.configure'];
      return;
    }

    const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
    const data = new FormData(form);

    // Show loading state
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton.value;
    submitButton.value = lang === 'es' ? 'Enviando...' : 'Sending...';
    submitButton.disabled = true;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        formStatus.className = 'form-status success';
        formStatus.textContent = dict['form.success'];
        form.reset();
      } else {
        formStatus.className = 'form-status error';
        formStatus.textContent = dict['form.error'];
      }
    } catch (err) {
      formStatus.className = 'form-status error';
      formStatus.textContent = dict['form.error'];
    } finally {
      submitButton.value = originalText;
      submitButton.disabled = false;
    }
  });
}

// --- Parallax Effect on Hero ---
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const homeSection = document.querySelector('.home');
  if (homeSection && scrolled < homeSection.offsetHeight) {
    homeSection.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// --- Smooth Scroll Enhancement ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
