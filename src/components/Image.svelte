<script lang="ts">
  //@ts-nocheck
	import viewport from "../actions/useViewportAction";


  export let src: string
  export let alt: string | undefined
  export let clazz: string | undefined = undefined

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
<img
    class={clazz}
    use:viewport
    on:enterViewport={loadImage}
    on:load={finished} class:loaded {alt} src={vsrc} />


<style>
  img {
    opacity: 1;
    transition: opacity 1000ms, scale 1000ms;
  }
  img:not(.loaded) {
    opacity: 0;
    position: absolute;
  }
  img:hover {
    scale: 1.05;
  }
</style>