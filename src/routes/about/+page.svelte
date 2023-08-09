<script lang="ts">
	import type { AboutData } from "../../api/client";

  export let data: AboutData
</script>

<section class="container">
  <article>
    <div class="img">
      <img class="headshot" src={data.headshot} alt="headshot of grayson"/>
      <img class="headshotbg" src={data.headshotbg} alt="headshot background"/>
    </div>
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
  .img, img {
    position: relative;
    width: 120rem;
    max-width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .img::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
  }

  .headshot {
    position: absolute;
    z-index: 3;
  }

  .headshotbg {
    position: absolute;
    z-index: -1;
    filter: saturate(0.4) blur(5px);
    transform: scale(1.05);
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 30rem;
    margin-inline: auto;
    align-items: center;
    --border-radius: 50%;
  }

  h2 {
    color: var(--color-dark);
    font-size: 3.5rem;
    font-weight: 900;
    font-stretch: 100%;
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