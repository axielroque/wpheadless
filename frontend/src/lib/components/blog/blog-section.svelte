<script>
  import BlogCards from "./blog-cards.svelte";

  export let posts;
</script>

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-accent sm:text-3xl">Blog</h2>

      <p class="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <BlogCards {posts} />
  </div>
</section>
