import { WORDPRESS_GRAPHQL_ENDPOINT } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    // Consulta de los posts del blog
    const blogQuery = `
        query homeposts {
            posts(first: 3) {
                nodes {
                slug
                date
                title
                excerpt
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                terms {
                    nodes {
                    name
                    }
                }
                }
            }
        }
    `;

    // Consulta de los productos destacados
    const productsQuery = `
        query products {
            products(first: 4) {
                nodes {
                ... on SimpleProduct {
                    slug
                    name
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

    // Realizar ambas consultas en paralelo
    const [blogRes, productsRes] = await Promise.all([
        fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: blogQuery }),
        }),
        fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: productsQuery }),
        }),
    ]);

    // Verificar si ambas consultas fueron exitosas
    if (!blogRes.ok || !productsRes.ok) {
        console.error("Error fetching data:", {
            blogError: blogRes.statusText,
            productsError: productsRes.statusText,
        });
        return { blogPosts: [], products: [] };
    }

    // Parsear las respuestas
    const [blogData, productsData] = await Promise.all([
        blogRes.json(),
        productsRes.json(),
    ]);

    // Devolver los datos combinados
    return {
        blogPosts: blogData.data.posts.nodes || [],
        products: productsData.data.products.nodes || [],
    };
}
