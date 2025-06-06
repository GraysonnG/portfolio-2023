<script lang="ts">
  // @ts-nocheck
	import { fly } from "svelte/transition";
	import viewport from "../actions/useViewportAction";
	import { create_in_transition } from "svelte/internal";
	import { elasticOut } from "svelte/easing";

  export let items: string[];
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
      const durOffset = Math.round((Math.random() * 2000) + 2500)

      let offsetX = parentCx - nodeCx
      let offsetY = parentCy - nodeCy

      create_in_transition(
        node, 
        fly, 
        { 
          x: offsetX * 0.5, 
          y: offsetY * 0.5, 
          duration: 2400 + durOffset, 
          opacity: 0,
          easing: elasticOut, 
        }
      ).start()
    });

    finished = true
  }
</script>

<div 
  use:viewport
  on:enterViewport={onEnter}
  class:start={!finished}
  style="--duration: {items.length}s;"
>
  {#each items as item, i}
    <span style="--delay: {i * 1000}ms;">{item}</span>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    opacity: 1;
    will-change: contents;
  }

  .start {
    opacity: 0;
  }

  span {
    position: relative;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-chip);
    font-weight: bold;
    color: var(--color-on-chip);
    transform: translate(0,0);
    will-change: transform, opacity, top, left;
    overflow: hidden;
  }

  span::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--color-white);;
    animation: blink var(--duration) infinite;
    animation-delay: var(--delay);
    opacity: 0;
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


  /* Animation */
  @keyframes blink {
    49% {
      opacity: 0;
    }
    50% {
      opacity: 0.25;
    }
    75% {
      opacity: 0;
    }
  }
</style>