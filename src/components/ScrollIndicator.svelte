<script>
	import { onMount } from "svelte";
	import isSplit from "../helpers/splithelper";
	import { page } from "$app/stores";
	import { fade, fly } from "svelte/transition";

  let canScroll = false;
  let atTop = false;

  onMount(() => {
    let interval = setInterval(() => {
      const body = document.body;
      const hasScrollbar = body.scrollHeight > body.clientHeight * 1.2;
      const isTop = body.scrollTop === 0;
      atTop = isTop;

      canScroll = hasScrollbar && isTop;
    }, 200)

    return () => {
      clearInterval(interval)
    }
  })
</script>


<div
  in:fly={{ y: 200, duration: 1200 }}
  out:fade={{ duration: 1200 }}
  class:light={isSplit($page.route.id)}
  class:atTop={atTop}
  class:canScroll={canScroll}
  >
  <i class="fas fa-chevron-down"></i>
</div>


<style>
  div {
    position: fixed;
    bottom: 4rem;
    left: 50%;
    font-size: 2rem;
    color: var(--color-on-surface);
    cursor: pointer;
    transition: transform 200ms, opacity 1200ms, color 1200ms;
    animation: bounce 2s infinite;
    opacity: 0;
    translate: -50%;
    text-shadow: 0 0 1rem var(--color-light);
  }

  div i {
    
    text-shadow: 0 0 1rem var(--color-light);
  }

  .light {
    color: var(--color-light);
  }

  .canScroll {
    opacity: 1;
  }

  @media screen and (min-width: 1200px) {
    div {
      bottom: 2rem;
    }
  }

  @media screen and (max-width: 800px) {
    div {
      color: var(--color-dark) !important;
    }
  }

  /* bouncing animation */
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>