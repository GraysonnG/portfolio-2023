<script lang="ts">
	import type { Button } from "../api/client";

  export let data: Button

  let external = data.url?.startsWith("http")
  let icon = data.icon !== "none" ? data.icon : undefined
  let flip = data.flip ? true : false
  
</script>

{#if data.url}
  {#if external} 
    <a 
      href={data.url}
      class="button"
      target="_blank"
      rel="noreferrer noopener"
      class:flip
      class:primary={data.primary}>
      {#if icon}
        <i class={icon}/>
      {/if}
      {data.title}
    </a>
  {:else}
    <a 
      href={data.url}
      class="button" 
      class:flip
      class:primary={data.primary}>
      {#if icon}
        <i class={icon}/>
      {/if}
      {data.title}
    </a>
  {/if}
{:else}
  <button class:primary={data.primary}>{data.title}</button>
{/if}

<style>
  a {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  i {
    position: relative;
    top: -1px;
  }

  .flip {
    flex-direction: row-reverse;
  }
</style>