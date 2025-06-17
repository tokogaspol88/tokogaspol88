export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Tokogaspol88",
    "description": "Toko online terpercaya untuk kebutuhan otomotif. Jual berbagai aksesoris dan spare part mobil berkualitas dengan harga terjangkau.",
    "url": "https://tokogaspol88.com",
    "logo": "https://tokogaspol88.com/logo.svg",
    "image": "https://tokogaspol88.com/logo.svg",
    "telephone": "+62-XXX-XXXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Indonesia"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://vt.tokopedia.com/t/ZSkb5VNaV/",
      "https://vt.tokopedia.com/t/ZSkb5qAnm/",
      "https://www.tiktok.com/@toko_gaspol88"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Produk Otomotif",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Spare Part Mobil",
          "description": "Berbagai macam spare part mobil berkualitas"
        },
        {
          "@type": "OfferCatalog", 
          "name": "Aksesoris Otomotif",
          "description": "Aksesoris mobil untuk kenyamanan dan penampilan"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
