import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://itsworking.no";
const DEFAULT_IMAGE = "/modern_office_01.jpg";
const SITE_NAME = "Its Working AS";

export function SEO({ title, description, path = "", image = DEFAULT_IMAGE }: SEOProps) {
  const fullTitle = title === "Hjem" ? `${SITE_NAME} - IT-partner i Trondheim` : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url,
    image: imageUrl,
    logo: `${BASE_URL}/itsworking_logo_transparent_new.png`,
    description,
    telephone: "+4798850462",
    email: "thomas@itsworking.no",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fjordgata 43",
      addressLocality: "Trondheim",
      postalCode: "7010",
      addressCountry: "NO",
    },
    areaServed: ["Trondheim", "Trøndelag"],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="nb_NO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="NO-50" />
      <meta name="geo.placename" content="Trondheim" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
