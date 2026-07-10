import { negocio } from "@/lib/datos-negocio";

/**
 * JSON-LD Schema.org (LocalBusiness / Restaurant) para SEO local.
 * Ayuda a que Google entienda el negocio y lo muestre en resultados locales.
 */
export function DatosEstructurados() {
  const esquema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: negocio.nombre,
    description: negocio.descripcionCorta,
    servesCuisine: "Pizza Napolitana",
    priceRange: "$$",
    image: `${negocio.sitioWeb}/og-image.jpg`,
    url: negocio.sitioWeb,
    telephone: negocio.contacto.whatsappVisible,
    address: {
      "@type": "PostalAddress",
      streetAddress: negocio.direccion.calle,
      addressLocality: negocio.direccion.localidad,
      addressRegion: negocio.direccion.provincia,
      addressCountry: "AR",
    },
    sameAs: [negocio.contacto.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "20:30",
        closes: "23:30",
      },
    ],
    acceptsReservations: "False",
    menu: `${negocio.sitioWeb}/#menu`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(esquema) }}
    />
  );
}
