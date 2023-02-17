<script lang="ts">
	import type { AboutData } from "../../api/client";


  export let data: AboutData
</script>

<section class="container">
  <article>
    <img src={data.headshot} alt="headshot of grayson"/>
    <div class="content">
      <h2>
        Hello!
      </h2>
      <p>
        {data.description}
      </p>
    </div>
  </article>
</section>

<style>
  img {
    width: 30rem;
    max-width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    filter: saturate(0%);
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 30rem;
    margin-inline: auto;
    align-items: center;
  }

  h2 {
    color: var(--color-dark);
    font-size: 3.5rem;
    font-weight: 900;
    font-stretch: 125%;
  }

  p {
    font-size: 1.1rem;
    margin-top: 1rem;
    font-weight: 600;
    opacity: 0.7;
    line-height: 1.75;
  }

  @media screen and (min-width: 1200px) {
    article {
      flex-direction: row;
      max-width: 80rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
</style>