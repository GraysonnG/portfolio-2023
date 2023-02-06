<script lang="ts">
	import { fly } from "svelte/transition";

  export let words: string[]
</script>

{#key words}
<div>
  {#each {length: words.length > 1 ? words.length : 2} as _,index}
    <span 
      in:fly={{x: -100, duration: 1200, delay: 1210}}
      out:fly={{x: 100, duration: 1200}}>
    { words[index % words.length] }
  </span>
  {/each}
</div>
{/key}



<style>
  div {
    position: fixed;
    width: 100%;
    height: 100vmin;
    top: 4em;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    z-index: -2;
    opacity: 0.2;
    user-select: none;
    pointer-events: none;
  }

  span {
    position: relative;
    text-transform: uppercase;
    font-size: 50em;
    font-weight: 900;
    line-height: 1;
    left: 0ch;
    height: 1em;
    color: var(--color-white);
  }

  span:first-child {
    left: -0.5ch;
  }
</style>