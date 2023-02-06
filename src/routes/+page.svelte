<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="container">
  <h1>Grayson Gullion</h1>
  <p>Front-End Software Engineer</p>

  <div class="cta">
    <a href="/projects" class="button primary">Projects</a>
    <a href="/contact" class="button">Reach Out</a>
  </div>
</section>

<style>
  section {
    font-style: normal;
    text-transform: uppercase;
  }

  h1 {
    font-weight: 900;
    font-stretch: 110%;
    font-size: 12em;
    line-height: .9;
    color: var(--color-primary);
  }

  p {
    font-weight: 900;
    font-stretch: 125%;
    font-size: 2em;
    padding-left: 1rem;
  }

  .cta {
    padding-left: 1rem;
    margin-top: 8em;
    display: flex;
    gap: 2rem;
  }
</style>