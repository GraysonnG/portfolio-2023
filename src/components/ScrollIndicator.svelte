<script>
	import { onMount } from "svelte";
	import isSplit from "../helpers/splithelper";
	import { page } from "$app/stores";
	import { fade, fly } from "svelte/transition";

  let canScroll = false;


  onMount(() => {
    let interval = setInterval(() => {
      const body = document.body;
      const hasScrollbar = body.scrollHeight > body.clientHeight * 1.2;
      const isTop = body.scrollTop === 0;

      canScroll = hasScrollbar && isTop;
    }, 200)

    return () => {
      clearInterval(interval)
    }
  })
</script>

{#if canScroll}
  <div
    in:fly={{ y: 200, duration: 1200 }}
    out:fade={{ duration: 1200 }}
    class:light={isSplit($page.route.id)}
    >
    <i class="fas fa-chevron-down"></i>
  </div>
{/if}

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 50%;
    margin: 2rem;
    font-size: 2rem;
    color: var(--color-dark);
    cursor: pointer;
    transition: transform 200ms;
    animation: bounce 2s infinite;
  }

  .light {
    color: var(--color-light);
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