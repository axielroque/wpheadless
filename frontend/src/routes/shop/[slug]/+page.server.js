import { WORDPRESS_GRAPHQL_ENDPOINT } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query productBySlug {
                    product(idType: SLUG, id: "${params.slug}") {
                        ... on SimpleProduct {
                        name
                        price
                        content
                        featuredImage {
                            node {
                            sourceUrl
                            }
                        }
                        }
                    }
                }
            
                `
        })
    });

    if (!res.ok) {
        console.error('Error fetching data');
        return { product: [] };
    }
    const { data } = await res.json();
    return {
        product: data.product,
    };
};
