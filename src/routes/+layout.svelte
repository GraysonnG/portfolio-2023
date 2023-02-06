<script lang="ts">
  import '../styles/global.css'
  import '../styles/fonts.css'
  import Navigation from '../components/Navigation.svelte';
  import { page } from "$app/stores"
	import { fly } from 'svelte/transition';
	import Transition from '../components/Transition.svelte';
  import img from "../assets/hero-image.avif";
	import { shrink } from '../animations/shrink';
	import { cubicIn } from 'svelte/easing';

  const duration = 600;
  $: delay = duration + 10;
</script>

<Navigation />
<main>
  <Transition 
    intr={{
      transition: fly,
      options: { x: -200, duration, delay }
    }}
    outtr={{
      transition: fly,
      options: { x: 200, duration, easing: cubicIn }
    }}>
    <slot />
  </Transition>
</main>

{#if $page.route.id === '/'}
  <div transition:shrink={{ direction: 'right' }}>
    <img src={img} alt="">
  </div>
{/if}


<style>
  main {
    padding: 1em 2em;
  }

  div {
    position: fixed;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    z-index: -2;
    isolation: isolate;
  }

  div::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #0C001C;
    backdrop-filter: blur(10px);
    opacity: 0.8;
    z-index: 2;
  }

  div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  @media screen and (max-width: 600px) {
    main {
      padding: 1em;
    }
  }
</style>