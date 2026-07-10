/**
 * Datos centrales del negocio.
 * Toda la información de El Hornero Pizzería vive acá para mantener
 * el resto del código limpio y fácil de actualizar.
 */

export const negocio = {
  nombre: "El Hornero Pizzería",
  eslogan: "Auténtica Pizza Napolitana al Horno de Leña",
  rubro: "Pizzería artesanal - Pizzas estilo napolitano",
  descripcionCorta:
    "Pizzas napolitanas artesanales cocidas en horno de leña en La Consulta, Mendoza.",

  contacto: {
    whatsapp: "5492622345002",
    whatsappVisible: "+54 2622 34-5002",
    instagram: "https://www.instagram.com/elhorneropizzanapo/",
    instagramUsuario: "@elhorneropizzanapo",
  },

  direccion: {
    calle: "Eugenio Bustos 267",
    referencia: "",
    localidad: "La Consulta",
    provincia: "Mendoza",
    pais: "Argentina",
    completa:
      "El Hornero Pizza Napo, Eugenio Bustos 267, La Consulta, Mendoza, Argentina",
    // Búsqueda en Google Maps (usando el link corto que me diste)
    googleMapsUrl: "https://maps.app.goo.gl/n53QL9jbHd58YWP2A",
    googleMapsEmbed:
      "https://www.google.com/maps?q=-33.7367646,-69.1181109&output=embed",
  },

  horarios: [
    { dia: "Viernes", horario: "20:30 - 23:30" },
    { dia: "Sábado", horario: "20:30 - 23:30" },
    { dia: "Domingo", horario: "20:30 - 23:30" },
  ],

  modalidad: "Take Away (Retiro en el local)",

  sitioWeb: "https://elhorneropizza.com",
} as const;

/**
 * Genera un enlace de WhatsApp con un mensaje predefinido.
 */
export function enlaceWhatsApp(mensaje?: string): string {
  const texto = encodeURIComponent(
    mensaje ??
      "¡Hola El Hornero! Quería hacer un pedido de pizza 🍕"
  );
  return `https://wa.me/${negocio.contacto.whatsapp}?text=${texto}`;
}
