<script lang="ts">
	import type { AboutData } from "../../api/client";

  import Image from "../../components/Image.svelte";

  export let data: AboutData
</script>

<section class="container">
  <article>
    <div class="img">
      <img class="headshot" src={data.headshot} alt="headshot of grayson"/>
      <img class="headshotbg" src={data.headshotbg} alt="headshot background"/>
    </div>
    <div class="content">
      <h3>
        I'm Grayson,<br>
        a Software Engineer working remotely in Sterling, Virginia.
      </h3>
      <p>
        {@html data.description}
      </p>
    </div>
  </article>

  <article>
    <div class="jobhistory">
      <h2>A brief history</h2>

      {#each data.history as job}
        <div class="job">
          <div class="job-logo">
            <Image src={job.logo} alt={job.title} />
          </div>
          <div class="job-content">
            <h4>{job.years}</h4>
            <h3>{job.title}</h3>
            <p>{job.content}</p>
          </div>
        </div>
      {/each}
    </div>
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 16rem;
    padding-bottom: 16rem;
  }

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
    width: 100%;
    max-width: 30rem;
    margin-inline: auto;
    align-items: center;
    --border-radius: 1em;
  }

  h2 {
    color: var(--color-dark);
    font-size: 3.5rem;
    font-weight: 900;
    font-stretch: 100%;
  }

  h3 {
    color: var(--color-dark);
    font-size: 2.5rem;
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

  .jobhistory {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .job {
    display: flex;
    gap: 4rem;
  }

  .job-logo {
    flex-shrink: 0;
    height: 10rem;
    width: 10rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: white;
    display: flex;
    align-items: center;
  }

  .job-logo :global(img) {
    aspect-ratio: 1;
    object-fit: contain;
  }

  .job-content {
    flex-grow: 1;
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