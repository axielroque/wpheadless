<script>
  import Navbar from "$lib/modules/navbar/navbar.svelte";
  import Footer from "$lib/modules/footer/footer.svelte";
  import Hero from "$lib/components/banners/hero.svelte";
  import Stat from "$lib/components/stat/stat.svelte";
  import ProductCollection from "$lib/components/product-collection/product-collection.svelte";
  import BlogCards from "$lib/components/blog-cards/blog-cards.svelte";
  import Newsletter from "$lib/components/ctas/newsletter.svelte";
</script>

<Navbar />

<Hero />

<ProductCollection />

<Stat />

<BlogCards />

<Newsletter />

<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
