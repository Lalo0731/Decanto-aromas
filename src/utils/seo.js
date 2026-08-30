const setMetaTag = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`);

    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
};

const setPropertyTag = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`);

    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
};

const setCanonical = (url) => {
    let link = document.querySelector('link[rel="canonical"]');

    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }

    link.setAttribute('href', url);
};

const setProductStructuredData = (product, image, url) => {
    let script = document.querySelector(
        'script[type="application/ld+json"][data-product-seo]'
    );

    if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-product-seo', 'true');
        document.head.appendChild(script);
    }

    /*
     * Decanto:
     * priceDecant = precio por 1 ml
     * venta mínima = 5 ml
     *
     * Por lo tanto, el precio de la oferta que mostramos
     * a Google es el mínimo comprable: 5 ml.
     */
    const isDecant = product.isDecant || product.isDecantOnly;

    const price = isDecant
        ? Number(product.priceDecant || 0) * 5
        : Number(product.price || 0);

    const productData = {
        '@context': 'https://schema.org',
        '@type': 'Product',

        name: product.name?.trim() || 'Perfume',

        description:
            product.description?.trim() ||
            `Conoce ${product.name} en Decanto Aromas.`,

        image: [image],

        brand: {
            '@type': 'Brand',
            name:
                product.name?.match(/\((.*?)\)/)?.[1] ||
                'Decanto Aromas'
        },

        offers: {
            '@type': 'Offer',
            url: url,
            priceCurrency: 'MXN',
            price: price,
            availability: product.available
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock'
        }
    };

    script.textContent = JSON.stringify(productData);
};

export const setProductSEO = (product) => {
    if (!product) return;

    const name = product.name?.trim() || 'Perfume';

    const description =
        product.description?.trim() ||
        `Conoce ${name} en Decanto Aromas. Perfumes y decants disponibles en México.`;

    const image = product.images?.[0]?.image_url
        ? `${window.location.origin}/uploads/perfumes/${product.images[0].image_url}`
        : `${window.location.origin}/logo.png`;

    /*
     * Usamos la URL actual de la página.
     *
     * Ejemplos:
     * /product-full/71
     * /product-decants/55
     * /product/209
     */
    const url = window.location.href;

    // TITLE
    document.title = `${name} | Decanto Aromas`;

    // META DESCRIPTION
    setMetaTag('description', description);

    // CANONICAL
    setCanonical(url);

    // OPEN GRAPH
    setPropertyTag('og:title', `${name} | Decanto Aromas`);
    setPropertyTag('og:description', description);
    setPropertyTag('og:image', image);
    setPropertyTag('og:url', url);
    setPropertyTag('og:type', 'product');
    setPropertyTag('og:site_name', 'Decanto Aromas');

    // TWITTER / X
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', `${name} | Decanto Aromas`);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // PRODUCT STRUCTURED DATA
    setProductStructuredData(product, image, url);
};