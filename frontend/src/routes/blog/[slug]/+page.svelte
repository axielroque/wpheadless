<script>
  import Time from "svelte-time";

  import Footer from "$lib/modules/footer/footer.svelte";
  import Navbar from "$lib/modules/navbar/navbar.svelte";

  export let data;

  let post = data.post;
  //console.log(data);
</script>

<Navbar />

<section>
  <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="group">
      {#if post.featuredImage == null}
        <img
          alt=""
          src="http://wp-headless.wp/wp-content/uploads/2025/01/elementor-placeholder-image.webp"
          class="h-96 w-full rounded-xl object-cover shadow-xl transition"
        />
      {:else}
        <img
          alt=""
          src={post.featuredImage.node.sourceUrl}
          class="h-96 w-full rounded-xl object-cover shadow-xl transition"
        />{/if}

      <div class="p-4">
        <time class="block text-md text-accent">
          <Time timestamp={post.date} format="MMMM D, YYYY" />
        </time>
        <div class="mt-4 flex flex-wrap gap-1">
          {#each post.categories.nodes as term}
            <span
              class="whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-xs text-white"
            >
              {term.name}
            </span>
          {/each}
        </div>

        <h1 class="text-xl font-bold text-black sm:text-3xl py-6">
          {post.title}
        </h1>

        <p class="mt-2 text-lg/relaxed text-gray-accent">
          {@html post.content}
        </p>
      </div>
    </div>
  </div>
</section>

<Footer />
