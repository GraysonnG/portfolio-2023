<script lang="ts">
  // @ts-nocheck
	import { create_in_transition, create_out_transition } from "svelte/internal";
	import { fly } from "svelte/transition";
	import viewport from "../actions/useViewportAction";

  export let img: string
  export let langs: string[]
  let me: HTMLElement
  let finished = false

  const onEnter = () => {
    if (!finished) {
      create_in_transition(me, fly, { x: 200, duration: 1200 }).start()
      finished = true
    }
  }
</script>


  <div 
  use:viewport 
  on:enterViewport={onEnter}
  class="card" bind:this={me}>
    <img src={img} alt="" />
    <div class="content">
      <slot name="title"/>
      <slot name="description" />
      <div class="chips">
        {#each langs as lang}
          <div class="chip">{lang}</div>
        {/each}
      </div> <!-- Replace with chips component -->
    </div>
  </div>

<style>
  .card {
    position: relative;
    height: 25rem;
    isolation: isolate;
    display: flex;
    gap: 4em;
  }

  .card:nth-child(2n) {
    flex-direction: row-reverse;
  }

  img {
    border-radius: 0.5rem;
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .card :global(h2) {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  .card :global(p) {
    font-size: 1.2rem;
    line-height: 1.75;
    font-weight: 600;
    opacity: 0.7;
  }

  .chips {
    margin-top: auto;
    display: flex;
    gap: 1em;
  }

  .chip {
    font-weight: 600;
    color: var(--color-primary-700);
    background-color: var(--color-primary-500-25);
    padding: 0.25rem 1rem;
    border-radius: 0.3rem;
    backdrop-filter: blur(5px);
  }

  @media screen and (max-width: 1200px) {
    .card {
      height: unset;
      flex-direction: column;
      width: 100%;
      gap: 2em;
    }

    .card:nth-child(2n) {
      flex-direction: column;
    }

    .card > img {
      height: unset;
      max-width: 100%;
      max-height: 25rem;
    }

    .card :global(p) {
      font-size: 1rem;
      font-weight: 600;
      opacity: 0.7;
    }

    .chips {
      flex-wrap: wrap;
    }
  }
</style>