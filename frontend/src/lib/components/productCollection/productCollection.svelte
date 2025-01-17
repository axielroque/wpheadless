<script>
  export let products;
</script>

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-accent sm:text-3xl">Products</h2>

      <p class="mx-auto mt-4 max-w-2xl text-gray-500 text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each products as product}
        <li>
          <div class="group relative block overflow-hidden">
            <button
              class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
              <span class="sr-only">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            {#if product.image == null}
              <img
                src="http://wp-headless.wp/wp-content/uploads/2025/01/elementor-placeholder-image.webp"
                alt={product.name}
                class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
            {:else}
              <img
                src={product.image.sourceUrl}
                alt={product.name}
                class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
            {/if}

            <div class="relative border border-gray-100 bg-white p-6">
              <p class="text-black font-semibold">
                {product.price}
              </p>

              <h3 class="mt-1.5 text-lg font-medium text-accent">
                <a href="/shop/{product.slug}">
                  {product.name}
                </a>
              </h3>

              <div class="mt-4 flex gap-4">
                <a
                  href="!#"
                  class="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-primary transition hover:scale-105"
                >
                  Add to Cart
                </a>

                <a
                  href="shop/{product.slug}"
                  class="block w-full rounded bg-primary px-4 py-3 text-center text-sm font-medium text-white transition hover:scale-105"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
