<script>
  import { page } from "$app/stores"
</script>

<section>
  <div>
    <h1>{$page.status}</h1>
    <h2>Something went wrong!</h2>
  </div>
</section>

<style>
  section {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  div {
    text-align: center;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    opacity: 0.6;
    font-size: 1.5em;
    font-weight: 100;
  }
</style>