<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { cubicInOut } from "svelte/easing";
	import { create_in_transition } from "svelte/internal";
	import { fly } from "svelte/transition";

  let h1: HTMLElement
  let p: HTMLElement
  let cta: HTMLElement

	afterNavigate(({ from }) => {
    if(from === null) {
      create_in_transition(h1, fly, { x: -1000, duration: 2000, easing: cubicInOut }).start()
      create_in_transition(p, fly, { x: -1000, duration: 2000, delay: 600, easing: cubicInOut }).start()
      create_in_transition(cta, fly, { y: 1000, duration: 2600, easing: cubicInOut }).start()
    }
  })

</script>
<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="container">
  <h1 bind:this={h1}>Grayson Gullion</h1>
  <p bind:this={p}>Front-End Software Engineer</p>

  <div class="cta" bind:this={cta}>
    <a href="/projects" class="button primary">Projects</a>
    <a href="/contact" class="button">Reach Out</a>
  </div>
</section>

<style>
  section {
    font-style: normal;
    text-transform: uppercase;
    text-align: center;
  }

  h1 {
    display: inline-block;
    font-size: 4em;
    font-weight: 900;
    font-stretch: 110%;
    line-height: 1;
    color: var(--color-primary);
    width: 100%;
  }

  p {
    display: inline-block;
    width: 100%;
    margin-top: 1em;
    position: relative;
    left: 0.25em;
    font-size: 1em;
    font-weight: 900;
    font-stretch: 125%;
    max-width: 75vw;
  }

  .cta {
    position: relative;
    margin-top: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.8em;
  }

  .cta :global(.primary) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 1200px) {
    section {
      text-align: start;
    }

    h1 {
      font-weight: 900;
      font-stretch: 110%;
      font-size: 12em;
      line-height: .9;
    }

    p {
      font-weight: 900;
      font-stretch: 125%;
      font-size: 2em;
      padding-left: 1rem;
      margin: 0;
      max-width: 45vw;
    }

    .cta {
      font-size: 1em;
      flex-direction: row;
      padding-left: 1rem;
      gap: 2rem;
      align-items: center;
      justify-content: unset;
    }

    .cta :global(.primary) {
      font-size: 1em;
    }
  }
</style>