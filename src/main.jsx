import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

// Imágenes que coinciden con la maqueta
const images = {
  heroBanner: publicAsset('hero-banner.jpg'),
  // Servicios
  plumbing: publicAsset('gasfiteria-card.jpg'),
  remodeling: publicAsset('remodelacion-card.jpg'),
  electrical: publicAsset('electricidad-card.jpg'),
  // Nosotros
  aboutBathroom: publicAsset('bathroom-why.jpg'),
  // Proyectos
  work1: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80', // Baño moderno con lavamanos madera
  work2: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80', // Cocina azul
  work3: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80', // Muro de piedra / revestimiento
  work4: publicAsset('work-pvc.jpg'), // Cañerías PVC
  work5: publicAsset('electrical-real.jpg'), // Tablero eléctrico con peineta
  work6: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80', // Casa gris con ventana blanca
};

const WHATSAPP_NUMBER = '+56928495101';
const WHATSAPP_LINK = `https://wa.me/56928495101?text=${encodeURIComponent('Hola MYF Construcciones, me gustaría solicitar una cotización.')}`;

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function Logo() {
  return (
    <a href="#inicio" className="brand-logo" aria-label="MYF Construcciones">
      <img src={publicAsset('myf-official-logo.jpg')} alt="MYF Construcciones" className="logo-image" />
    </a>
  );
}

const projects = [
  { id: 1, img: images.work1, title: 'Remodelación de baño' },
  { id: 2, img: images.work2, title: 'Muebles de cocina a medida' },
  { id: 3, img: images.work3, title: 'Revestimiento y muros exteriores' },
  { id: 4, img: images.work4, title: 'Instalación de cañerías y desagües' },
  { id: 5, img: images.work5, title: 'Armado de tablero eléctrico' },
  { id: 6, img: images.work6, title: 'Pintura y terminación de fachada' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollIdx, setScrollIdx] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  const handlePrev = () => {
    setScrollIdx((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setScrollIdx((prev) => (prev < projects.length - 6 ? prev + 1 : prev));
  };

  return (
    <div className="site-shell">
      {/* 1. Header / Navegación */}
      <header className="topbar">
        <div className="container nav-container">
          <Logo />
          
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <a href="#inicio" className="active" onClick={closeMenu}>Inicio</a>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
            <a href="#trabajos" onClick={closeMenu}>Trabajos realizados</a>
            <a href="#opiniones" onClick={closeMenu}>Opiniones</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </nav>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-header">
            <WhatsAppIcon size={18} />
            <span>Cotiza por WhatsApp</span>
          </a>

          <button 
            className="mobile-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="hero-section" id="inicio">
          <div className="hero-bg" style={{ backgroundImage: `url(${images.heroBanner})` }}></div>
          <div className="hero-overlay"></div>
          
          <div className="container hero-layout">
            <div className="hero-content">
              <span className="hero-subhead">SOLUCIONES PARA TU HOGAR Y PROYECTOS</span>
              <h1 className="hero-title">
                <span className="brand-white">MYF</span><br />
                <span className="brand-gold">CONSTRUCCIONES</span>
              </h1>
              <p className="hero-desc">
                Gasfitería, construcción, remodelación y electricidad.<br />
                Calidad, confianza y trabajos bien hechos.
              </p>
              
              <div className="hero-buttons">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary-gold">
                  <WhatsAppIcon size={18} />
                  <span>Solicita tu cotización</span>
                </a>
                <a href="#servicios" className="btn btn-outline-white">
                  Conoce nuestros servicios
                </a>
              </div>

              <div className="hero-badges">
                <div className="badge-item">
                  <span className="badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </span>
                  <span className="badge-text">Trabajos garantizados</span>
                </div>
                <div className="badge-separator">|</div>
                <div className="badge-item">
                  <span className="badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <span className="badge-text">Atención rápida</span>
                </div>
                <div className="badge-separator">|</div>
                <div className="badge-item">
                  <span className="badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8l-2.6 2.4" />
                      <path d="M18 10V6a2 2 0 0 0-2-2H8" />
                    </svg>
                  </span>
                  <span className="badge-text">Asesoría personalizada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sección Nuestros Servicios */}
        <section className="section-services" id="servicios">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-eyebrow">NUESTROS SERVICIOS</span>
              <h2 className="section-heading-dark">Soluciones para tu hogar y construcción</h2>
              <p className="section-subtext">Contamos con personal calificado y experiencia en distintos tipos de proyectos.</p>
            </div>

            <div className="services-grid">
              {/* Tarjeta 1: Gasfitería */}
              <article className="service-card">
                <div className="card-media">
                  <img src={images.plumbing} alt="Servicio de gasfitería profesional con llave stilson" />
                  <div className="service-badge-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 4V2H8v2H3v2h2v1H3v2h2v1H3v2h2a5 5 0 0 0 5 5v5h4v-5a5 5 0 0 0 5-5h2V9h-2V8h2V6h-2V4h-5V2h-2v2h-2zM9 13a3 3 0 0 1-2-2.83V6h10v4.17A3 3 0 0 1 15 13H9z"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Gasfitería</h3>
                  <p>Instalación, reparación y mantención de cañerías, artefactos y sistemas de agua.</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-pill">Ver más &rarr;</a>
                </div>
              </article>

              {/* Tarjeta 2: Construcción y Remodelación */}
              <article className="service-card">
                <div className="card-media">
                  <img src={images.remodeling} alt="Construcción e instalación de revestimientos cerámicos" />
                  <div className="service-badge-icon badge-orange" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v3H13V6h6zm-8 0v3H5V6h6zm-6 5h5v3H5v-3zm7 0h10v3H12v-3zm7 5v3h-6v-3h6zm-8 0v3H5v-3h6z"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Construcción y Remodelación</h3>
                  <p>Obras menores y mayores, ampliaciones, remodelaciones y terminaciones.</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-pill">Ver más &rarr;</a>
                </div>
              </article>

              {/* Tarjeta 3: Electricidad */}
              <article className="service-card">
                <div className="card-media">
                  <img src={images.electrical} alt="Instalación y mantención eléctrica con tablero protegido" />
                  <div className="service-badge-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 7V3h-2v4h-4V3H8v4a6 6 0 0 0 5 5.91V18h-2v2h2v2h2v-2h2v-2h-2v-5.09A6 6 0 0 0 16 7z"/>
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Electricidad</h3>
                  <p>Instalación, mantención y reparación de sistemas eléctricos residenciales y comerciales.</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-pill">Ver más &rarr;</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Sección ¿Por qué elegir MYF Construcciones? (Nosotros) */}
        <section className="section-why" id="nosotros">
          <div className="why-split-container">
            {/* Columna Izquierda: Beneficios en fondo azul marino */}
            <div className="why-left-content">
              <h2 className="why-title">¿Por qué elegir<br />MYF Construcciones?</h2>
              <p className="why-lead">
                Nos comprometemos con la calidad, la seguridad y la satisfacción de cada cliente, entregando soluciones confiables y duraderas.
              </p>

              <div className="why-features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Experiencia en el rubro</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span>Atención personalizada</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span>Trabajos garantizados</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 14 14" />
                    </svg>
                  </div>
                  <span>Cumplimiento de plazos</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Imagen del baño con card flotante dorada */}
            <div className="why-right-media">
              <img src={images.aboutBathroom} alt="Baño moderno de diseño con finas terminaciones" className="why-photo" />
              <div className="floating-gold-card">
                <div className="gold-card-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="gold-card-text">
                  <strong>Hacemos realidad tus proyectos</strong>
                  <p>Desde pequeñas reparaciones hasta remodelaciones completas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sección Trabajos Realizados */}
        <section className="section-projects" id="trabajos">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-eyebrow">TRABAJOS REALIZADOS</span>
              <h2 className="section-heading-dark">Proyectos que hablan por nosotros</h2>
            </div>

            <div className="projects-carousel-wrapper">
              <button 
                className="carousel-arrow prev" 
                onClick={handlePrev}
                aria-label="Proyecto anterior"
                disabled={scrollIdx === 0}
              >
                &lsaquo;
              </button>

              <div className="projects-carousel-track">
                {projects.map((proj) => (
                  <div key={proj.id} className="project-card">
                    <img src={proj.img} alt={proj.title} />
                  </div>
                ))}
              </div>

              <button 
                className="carousel-arrow next" 
                onClick={handleNext}
                aria-label="Siguiente proyecto"
                disabled={scrollIdx >= projects.length - 6}
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </section>

        {/* 6. Sección Opiniones de nuestros clientes (Sin fotos de rostros) */}
        <section className="section-reviews" id="opiniones">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-eyebrow-light">OPINIONES DE NUESTROS CLIENTES</span>
              <h2 className="section-heading-light">Lo que dicen de nuestro trabajos</h2>
            </div>

            <div className="reviews-grid">
              {/* Testimonio 1 */}
              <div className="review-card">
                <p className="review-quote">"Excelente trabajo, muy profesional y cumplió con los plazos. 100% recomendado."</p>
                <div className="stars" aria-label="5 de 5 estrellas">
                  {'★★★★★'}
                </div>
                <div className="reviewer-info">
                  <div className="avatar-initials">CM</div>
                  <div>
                    <h4 className="reviewer-name">Carlos M.</h4>
                    <span className="reviewer-tag">Remodelación de baño</span>
                  </div>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div className="review-card">
                <p className="review-quote">"Me solucionaron un problema de gasfitería muy rápido y a buen precio."</p>
                <div className="stars" aria-label="5 de 5 estrellas">
                  {'★★★★★'}
                </div>
                <div className="reviewer-info">
                  <div className="avatar-initials">MP</div>
                  <div>
                    <h4 className="reviewer-name">María P.</h4>
                    <span className="reviewer-tag">Reparación de cañerías</span>
                  </div>
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="review-card">
                <p className="review-quote">"Instalaron toda la electricidad de mi casa. Quedó todo perfecto."</p>
                <div className="stars" aria-label="5 de 5 estrellas">
                  {'★★★★★'}
                </div>
                <div className="reviewer-info">
                  <div className="avatar-initials">JR</div>
                  <div>
                    <h4 className="reviewer-name">Javier R.</h4>
                    <span className="reviewer-tag">Instalación eléctrica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sección Contacto / Footer comercial */}
        <footer className="footer-contact" id="contacto">
          <div className="container footer-contact-layout">
            <div className="footer-lead">
              <h3>Contáctanos</h3>
              <p>Solicita tu cotización sin compromiso.<br />Estamos listos para ayudarte.</p>
            </div>

            <div className="contact-details">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon-bubble whatsapp-bubble">
                  <WhatsAppIcon size={20} />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>{WHATSAPP_NUMBER}</strong>
                </div>
              </a>

              <a href={`tel:${WHATSAPP_NUMBER}`} className="contact-item">
                <span className="contact-icon-bubble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z"/>
                  </svg>
                </span>
                <div>
                  <small>Teléfono</small>
                  <strong>{WHATSAPP_NUMBER}</strong>
                </div>
              </a>

              <div className="contact-item">
                <span className="contact-icon-bubble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </span>
                <div>
                  <small>Zona de atención</small>
                  <strong>Santiago y alrededores</strong>
                </div>
              </div>
            </div>

            <div className="footer-action">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-footer">
                <WhatsAppIcon size={20} />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
