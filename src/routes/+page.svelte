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
    position: relative;
    padding-left: 1rem;
    margin-top: 8em;
    display: flex;
    gap: 2rem;
  }
</style>