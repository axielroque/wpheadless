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
<<<<<<< HEAD
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                        terms {
                            nodes {
                                name
=======
                        terms {
                            nodes {
                            name
>>>>>>> 7219ed6d1b6b3be04635530cbe50699be1fa5d0a
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


