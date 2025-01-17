<script>
  import Time from "svelte-time/Time.svelte";
  export let posts;
</script>

<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {#each posts as post}
    <li>
      <article
        class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        {#if post.featuredImage == null}
          <img
            alt={post.title}
            src="http://wp-headless.wp/wp-content/uploads/2025/01/elementor-placeholder-image.webp"
            class="h-56 w-full object-cover"
          />
        {:else}
          <img
            alt={post.title}
            src={post.featuredImage.node.sourceUrl}
            class="h-56 w-full object-cover"
          />
        {/if}

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-600">
            <Time timestamp={post.date} format="MMMM D, YYYY" />
          </time>
          <div class="mt-4 flex flex-wrap gap-1">
            {#each post.terms.nodes as term}
              <span
                class="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-primary"
              >
                {term.name}
              </span>
            {/each}
          </div>

          <a href="blog/{post.slug}">
            <h3 class="mt-0.5 text-lg">
              {post.title}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
            {@html post.excerpt}
          </p>
          <a
            href="blog/{post.slug}"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Read more

            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </li>
  {/each}
</ul>
