<script>
  import Navbar from "$lib/modules/navbar/navbar.svelte";
  import Footer from "$lib/modules/footer/footer.svelte";
  import BlogCards from "$lib/components/blog/blog-cards.svelte";

  export let data;

  let posts = data.posts;

  //console.log(posts);
</script>

<Navbar />

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-accent sm:text-3xl">Blog</h2>
    </header>

    <BlogCards {posts} />
  </div>
</section>

<Footer />
