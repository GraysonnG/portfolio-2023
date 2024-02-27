<script lang="ts">
  import '../styles/global.css'
  import '../styles/fonts.css'
  import Navigation from '../components/Navigation.svelte';
  import { page } from "$app/stores"
	import { fly } from 'svelte/transition';
	import Transition from '../components/Transition.svelte';
  import hero from "../assets/anime-hero.webp";
	import { shrink } from '../animations/shrink';
	import { cubicIn } from 'svelte/easing';
	import Watermark from '../components/Watermark.svelte';
	import { afterNavigate } from '$app/navigation';
	import { create_in_transition } from 'svelte/internal';
	import isSplit from '../helpers/splithelper';
	import ScrollIndicator from '../components/ScrollIndicator.svelte';

  const duration = 800;
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
    document.body.scrollTo(0, 0)

    if (panel && from === null) {
      create_in_transition(panel, shrink, { direction: "right", duration: duration * 2 }).start()
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
<Watermark words={getWords($page.url.pathname)} duration={duration * 2} />
<ScrollIndicator />

{#if isSplit($page.route.id)}
  <div bind:this={panel} transition:shrink={{ direction: 'right', duration: duration }}>
    <img src={hero} alt="">
  </div>
{/if}

<style>
  main {
    padding: 1em;
    padding-top: 5vh;
    padding-bottom: 15vh;
    display: grid;
    place-items: center;
    height: 100vh;
  }

  div {
    position: fixed;
    top: 0;
    right: 0;
    width: 0vw;
    height: 100vh;
    z-index: -2;
    isolation: isolate;
    overflow: hidden;
  }

  div::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #0C001C;
    opacity: 0.8;
    z-index: 2;
  }

  div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(25px);
    scale: 1.2;
  }

  @media screen and (min-width: 1200px) {
    main {
      padding: 1em 2em;
      padding-top: 18vh;
      display: block;
      height: fit-content;
    }

    div {
      width: 50vw;
    }
  }
</style>