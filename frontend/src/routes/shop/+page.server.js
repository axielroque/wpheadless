import { WORDPRESS_GRAPHQL_ENDPOINT } from "$env/static/private";

export async function load() {
    const query = `
        query allProducts {
            products {
                nodes {
                ... on SimpleProduct {
                    name
                    slug
                    price
                    excerpt
                    image {
                    sourceUrl
                    }
                }
                }
            }
        }
    `;

    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        console.error('Error fetching featured products:', res.statusText);
        return { products: [] };
    }

    const { data } = await res.json();

    return {
        products: data.products.nodes || [],
    };
}
