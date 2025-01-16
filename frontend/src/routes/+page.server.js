import { WORDPRESS_GRAPHQL_ENDPOINT } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query homeposts {
                    posts(first: 3) {
                        nodes {
                        slug
                        date
                        title
                        excerpt
                        terms {
                            nodes {
                            name
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
        return { posts: [] };
    }

    const { data } = await res.json();
    return {
        posts: data.posts.nodes,
    };
};


