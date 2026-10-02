const documentos = [
  {
    href: "https://www.uniamazonia.edu.co/documentos/docs/Consejo%20Academico/Acuerdos/2002/Acuerdo%2019%20-%20Por%20el%20cual%20se%20adopta%20la%20linea%20de%20investigacion%20Sistemas%20de%20Formacion%20Geografica%20para%20la%20facultad%20de%20ingenieria.pdf",
    titulo: "Acuerdo No. 019 de 2002",
    detalle: "Línea de Investigación Sistemas de Información Geográfica"
  },
  {
    href: "https://drive.google.com/drive/folders/1OjF8Tb43WolUrTwbHwLWE9UDTKP45xVQ?usp=drive_link",
    titulo: "Contenidos programáticos pensum 2020",
    detalle: "Plan de estudios y contenidos por asignatura"
  },
  {
    href: "https://www.uniamazonia.edu.co/documentos/docs/Programas%20Academicos/Ingenieria%20de%20Sistemas/Formatos%20de%20Opcion%20de%20grado/Opciones%20de%20grado.pdf",
    titulo: "Opciones de Grado",
    detalle: "Modalidades disponibles para culminar el programa"
  },
  {
    href: "https://drive.google.com/drive/folders/14EBlcWxRo1mfWvUKeTcIXoWUWORG0KUJ?usp=sharing",
    titulo: "Formatos de Opción de Grado",
    detalle: "Plantillas y formatos oficiales"
  },
  {
    href: "https://www.uniamazonia.edu.co/documentos/docs/Sistema%20Integrado%20de%20Gestion%20de%20Calidad/6.%20Procesos/2.%20Misional/Docencia/Procedimientos/7.%20Aprobacion%20de%20opcion%20de%20grado/FO-M-DC-07-03.pdf",
    titulo: "Formato Notificación Opción de Grado",
    detalle: "FO-M-DC-07-03"
  },
  {
    href: "https://drive.google.com/drive/folders/1IuMu73ZW26iHtAeWZHUp9UXN2dHLfxus?usp=sharing",
    titulo: "Protocolo de Sustentación y Socialización",
    detalle: "Lineamientos para la presentación final"
  },
  {
    href: "https://www.uniamazonia.edu.co/documentos/docs/Programas%20Academicos/Ingenieria%20de%20Sistemas/BROCHURE%20INGENIERIA%20DE%20SISTEMAS.pdf",
    titulo: "Brochure Ingeniería de Sistemas",
    detalle: "Información general del programa"
  }
];

function cardDocumento({ href, titulo, detalle }) {
  return `
    <div class="col-md-6">
      <a class="doc-item" href="${href}" target="_blank" rel="noopener noreferrer">
        <span>
          <strong class="d-block section-subtitle">${titulo}</strong>
          <small class="text-secondary">${detalle}</small>
        </span>
        <i class="bi bi-box-arrow-up-right text-success flex-shrink-0" aria-hidden="true"></i>
      </a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("docs-list");
  if (lista) lista.innerHTML = documentos.map(cardDocumento).join("");

  document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "#inicio");
    });
  });

  const menu = document.getElementById("menu");
  if (!menu || typeof bootstrap === "undefined") return;

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (!menu.classList.contains("show")) return;
      const instance = bootstrap.Collapse.getInstance(menu);
      if (instance) instance.hide();
    });
  });
});
