<script>
  import Navbar from "$lib/modules/navbar/navbar.svelte";
  import Footer from "$lib/modules/footer/footer.svelte";
  import Hero from "$lib/components/banners/hero.svelte";
  import Stat from "$lib/components/stat/stat.svelte";
  import ProductCollection from "$lib/components/product-collection/product-collection.svelte";


  import Newsletter from "$lib/components/ctas/newsletter.svelte";
  import BlogSection from "$lib/components/blog/blog-section.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  let posts = data;

  //console.log(posts);

</script>

<Navbar />

<Hero />

<ProductCollection />

<Stat />

<BlogSection {posts} />


<Newsletter />

<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
