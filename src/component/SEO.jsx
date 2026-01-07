import { useEffect } from "react";

const SEO = ({
  title = "Tigers MMA - Delhi's No.1 Martial Arts & Fitness Academy",
  description = "Professional training in MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Weight-Loss & Self-Defense. Join Delhi's premier martial arts academy.",
  keywords = "MMA, Boxing, Kickboxing, Taekwondo, Kung-Fu, Martial Arts, Fitness, Self-Defense, Delhi, Tilak Nagar",
  image = "https://mmatigers.com/images/og-image.jpg",
  url = "https://mmatigers.com",
  type = "website",
  author = "Tigers MMA",
  siteName = "Tigers MMA",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);

    // Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:site_name", siteName);

    // Twitter Card tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);

    // Canonical URL
    updateLinkTag("canonical", url);

    // Cleanup function (optional - for when component unmounts)
    return () => {
      // You can reset to default values if needed
    };
  }, [title, description, keywords, image, url, type, author, siteName]);

  return null; // This component doesn't render anything
};

export default SEO;
