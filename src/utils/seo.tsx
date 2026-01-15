import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    let lastModified = document.querySelector('meta[name="last-modified"]');
    if (!lastModified) {
      lastModified = document.createElement('meta');
      lastModified.setAttribute('name', 'last-modified');
      document.head.appendChild(lastModified);
    }
    lastModified.setAttribute('content', today);

    // Add Schema.org JSON-LD
    if (schema) {
      const scriptId = 'schema-org-jsonld';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogImage, schema]);
};

export const generateWebPageSchema = (
  url: string,
  name: string,
  description: string
) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${siteUrl}${url}`,
    name,
    description,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Play Now - Ultimate Gaming Experience',
    },
  };
};

export const generateWebSiteSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: 'Play Now - Ultimate Gaming Experience',
    description: 'Join thousands of players worldwide in the ultimate gaming adventure. Experience top-rated gameplay with our community of 10K+ players. Start your gaming journey now with immersive gameplay and exciting challenges.',
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

export const generateOrganizationSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Play Now Gaming',
    url: siteUrl,
    logo: `${siteUrl}/vite.svg`,
    sameAs: [],
  };
};
