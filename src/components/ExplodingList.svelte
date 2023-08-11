<script lang="ts">
  // @ts-nocheck
	import { fly } from "svelte/transition";
	import viewport from "../actions/useViewportAction";
	import { create_in_transition } from "svelte/internal";

  export let items: string[] = [];
  let finished = false

  const onEnter = (e: Event) => {
    if (finished) return

    const parent = e.target
    const parentRect = parent.getBoundingClientRect()
    const parentCx = parentRect.left + parentRect.width / 2
    const parentCy = parentRect.top + parentRect.height / 2

    parent.childNodes.forEach((node, i) => {
      const nodeRect = node.getBoundingClientRect()
      const nodeCx = nodeRect.left + nodeRect.width / 2
      const nodeCy = nodeRect.top + nodeRect.height / 2

      let offsetX = parentCx - nodeCx
      let offsetY = parentCy - nodeCy

      create_in_transition(
        node, 
        fly, 
        { x: offsetX*-2, y: offsetY*-2, duration: 2400, opacity: 0 }
      ).start()
    });

    finished = true
  }
</script>

<div 
  use:viewport
  on:enterViewport={onEnter}
  class:start={!finished}
>
  {#each items as item, i}
    <span>{item}</span>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    opacity: 1;
  }

  .start {
    opacity: 0;
  }

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary-500-25);
    font-weight: bold;
    color: var(--color-primary);
  }

  @media screen and (min-width: 1200px) {
    span {
      padding: 0.5rem 4rem;
      font-weight: 500;
      font-size: 1.5rem;
      flex-grow: 1;
      display: grid;
      place-items: center;
    }
  }
</style>