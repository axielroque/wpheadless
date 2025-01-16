import { WORDPRESS_GRAPHQL_ENDPOINT } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query posts {
                    posts {
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
    const { data } = await res.json();
    return {
        posts: data.posts.nodes,
    };
};


