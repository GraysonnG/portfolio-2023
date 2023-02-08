<script lang="ts">
	import type { Button } from "../api/client";

  export let data: Button

  let external = data.url?.startsWith("http")
  
</script>

{#if data.url}
  {#if external} 
    <a 
      href={data.url}
      class="button"
      target="_blank"
      rel="noreferrer noopener"
      class:primary={data.primary}>
      {data.title}
    </a>
  {:else}
    <a 
      href={data.url}
      class="button" 
      class:primary={data.primary}>
      {data.title}
    </a>
  {/if}
{:else}
  <button class:primary={data.primary}>{data.title}</button>
{/if}