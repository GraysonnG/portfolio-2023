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
	import BigWords from '../components/BigWords.svelte';
	import { afterNavigate } from '$app/navigation';
	import { create_in_transition } from 'svelte/internal';

  const duration = 600;
  $: delay = duration + 10;

  const getWords = (path: string): string[] => {
    const home = ["front", "end"]

    switch(path) {
      case "/":
        return home
      default: 
        return [path.replace("/", "")] || home
    }
  }

  let panel: HTMLElement

  afterNavigate(({from}) => {
    if (panel && from === null) {
      create_in_transition(panel, shrink, { direction: "right", duration: 1200 }).start()
    }
  })
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
<BigWords words={getWords($page.url.pathname)} />

{#if $page.route.id === '/'}
  <div bind:this={panel} transition:shrink={{ direction: 'right' }}>
    <img src={img} alt="">
  </div>
{/if}



<style>
  main {
    padding: 1em;
    padding-top: 5vh;
  }

  div {
    position: fixed;
    top: 0;
    right: 0;
    width: 20vw;
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

  @media screen and (min-width: 1200px) {
    main {
      padding: 1em 2em;
      padding-top: 18vh;
    }

    div {
      width: 50vw;
    }
  }
</style>