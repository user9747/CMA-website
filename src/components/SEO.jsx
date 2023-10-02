import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta
        name="keywords"
        content="architects, architectural design, building design, construction, architecture services"
      />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <script type="application/ld+json">
        {`{
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "CHANDRAMOHAN ASSOCIATES",
                "description": "A CONSTANT ENDEAVOR IN MAKING SENSIBLE SPACES FOR BETTER LIVING.THE QUEST GOES ON...",
                "url": "https://www.example.com/",
                "logo": "https://www.example.com/logo.png",
                "sameAs": [],
                "contactPoint": [
                    {
                    "@type": "ContactPoint",
                    "telephone": "0471-4053877",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Malayalam"]
                    }
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "C1, BELHAVEN GARDENS,KOWDIAR",
                    "addressLocality": "TRIVANDRUM",
                    "addressRegion": "KERALA",
                    "postalCode": "695003",
                    "addressCountry": "INDIA"
                }
                }`}
      </script>
      {children}
    </>
  );
};
