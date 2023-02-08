<script>
  import { page } from "$app/stores"
</script>

<section>
  <div class="content">
    <div>
      <h1>{$page.status}</h1>
      <h2>{$page.error?.message}</h2>
    </div>
    <img src={"https://cataas.com/cat/gif"} alt=""/>
  </div>
</section>

<style>

  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  img {
    width: 20em;
    height: 20em;
    object-fit: cover;
    border-radius: 0.3rem;
    filter: saturate(0%);
  }

  div > * {
    line-height: 1;
  }

  h1 {
    color: var(--color-dark);
    font-size: 12em;
    font-weight: 900;
    font-stretch: 90%;
  }

  h2 {
    color: var(--color-primary-700);
    font-size: 4em;
    font-weight: 900;
    font-stretch: 125%;
  }
</style>