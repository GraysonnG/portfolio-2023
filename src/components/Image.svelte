<script lang="ts">
  //@ts-nocheck
	import viewport from "../actions/useViewportAction";


  export let src: string
  export let alt: string | undefined
  $: loaded = false
  $: vsrc = ""

  const finished = () => {
    setTimeout(() => {loaded = !loaded}, 0)
  }

  const loadImage = () => {
    vsrc = src
  }

</script>

{#if !loaded}
  <slot />
{/if}
<img use:viewport
    on:enterViewport={loadImage}
    on:load={finished} class:loaded {alt} src={vsrc} />


<style>
  img {
    opacity: 1;
    transition: opacity 1000ms;
  }
  img:not(.loaded) {
    opacity: 0;
    position: absolute;
  }
</style>