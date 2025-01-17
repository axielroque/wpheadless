import { WORDPRESS_GRAPHQL_ENDPOINT } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query postsBy {
                    postBy(slug: "${params.slug}") {
                        id
                        content
                        categories {
                        nodes {
                            name
                        }
                        }
                        date
                        featuredImage {
                        node {
                            sourceUrl
                        }
                        }
                        title
                    }
                }
                `
        })
    });

    if (!res.ok) {
        console.error('Error fetching data');
        return { post: [] };
    }
    const { data } = await res.json();
    return {
        post: data.postBy,
    };
};
