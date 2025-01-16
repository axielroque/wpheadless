<script>
  export let posts;
</script>

<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {#each posts.posts as post}
    <li>
      <article
        class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-600">
            {post.date}
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

          <a href={post.slug}>
            <h3 class="mt-0.5 text-lg">
              {post.title}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
            {@html post.excerpt}
          </p>
          <a
            href={post.slug}
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
