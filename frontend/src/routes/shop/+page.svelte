<script>
  import ProductCollection from "$lib/components/productCollection/productCollection.svelte";
  import Footer from "$lib/modules/footer/footer.svelte";
  import Navbar from "$lib/modules/navbar/navbar.svelte";

  export let data;

  let products = data.products;
</script>

<Navbar />

<ProductCollection {products} />

<Footer />
