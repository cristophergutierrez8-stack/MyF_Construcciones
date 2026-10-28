# SPEC-001 — Landing page MYF Construcciones

Estado: borrador para revisión. Dirección visual aprobada; datos comerciales pendientes.

## Objetivo
Crear una landing responsive que presente MYF Construcciones y facilite consultas por gasfitería, construcción/remodelación y electricidad.

## Diseño
Paleta azul marino, blanco y dorado/amarillo. Navegación con Inicio, Servicios, Nosotros, Trabajos realizados, Opiniones y Contacto (ajustable). Hero con propuesta de valor, CTA de cotización, tarjetas de servicios, beneficios, galería, contacto y footer. Testimonios solo reales y autorizados. Animaciones discretas.

## Requisitos funcionales
- RF-01 Mostrar la marca MYF Construcciones sin afirmaciones no confirmadas.
- RF-02 Mostrar los tres servicios principales.
- RF-03 Navegación clara entre secciones.
- RF-04 CTA WhatsApp funcional solo tras confirmar número internacional.
- RF-05 Galería con fotos autorizadas o stock claramente no presentado como trabajos propios.
- RF-06 Testimonios solo si los proporciona el usuario y son auténticos; si no, omitir.
- RF-07 Contacto y zona de atención solo con datos confirmados.
- RF-08 Navegación por teclado y foco visible.

## Requisitos no funcionales
- Responsive móvil/tablet/escritorio.
- Accesibilidad básica, SEO y rendimiento razonable.
- Compatible con GitHub Pages y subruta.
- No exponer secretos ni recopilar datos innecesarios.

## Fuera de alcance
Backend, base de datos, autenticación, pagos, carrito, reservas y formularios que aparenten funcionar sin integración.

## Criterios de aceptación
- Paleta y composición coherentes con la maqueta.
- Servicios claramente visibles.
- No aparecen datos ficticios.
- Responsive y accesibilidad básica comprobados.
- `npm run build` pasa.
- Rutas y recursos funcionan en GitHub Pages.
- No se copia literalmente contenido de otros sitios.

## Pendiente
Número WhatsApp/teléfono, zona de atención, logo final en archivo, fotos reales y testimonios autorizados.
