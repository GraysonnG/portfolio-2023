<script lang="ts">
	import type { Button } from "../api/client";

  export let data: Button
  export let disabled = false
  export let onClick = () => {}

  let external = data.url?.startsWith("http")
  let icon = data.icon !== "none" ? data.icon : undefined
  let flip = data.flip ? true : false
  
</script>

{#if data.url}
  {#if external} 
    <a 
      href={data.url}
      class="button"
      class:disabled
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
      class:disabled
      class:flip
      class:primary={data.primary}>
      {#if icon}
        <i class={icon}/>
      {/if}
      {data.title}
    </a>
  {/if}
{:else}
  <button 
    {disabled}
    on:click={onClick}
    class:primary={data.primary}
    class:disabled
    class:flip>
    {#if icon}
      <i class={icon}/>
    {/if}
    {data.title}
  </button>
{/if}

<style>
  a, button {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  a::selection, button::selection {
    background: var(--color-light-08);
    color: var(--color-primary);
  }

  i {
    position: relative;
    top: -1px;
  }

  .flip {
    flex-direction: row-reverse;
  }

  button, .button {
    position: relative;
    width: fit-content;
    top: 0;
    transition: all 600ms;
    background-color: var(--color-button-variant);
    color: var(--color-on-button-variant);
    border: 3px solid transparent;
    border-radius: 0.5em;
    padding: 0.75em 3.5em;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
  }

  button.primary, .button.primary {
    border-color: transparent;
    background-color: var(--color-button);
    color: var(--color-on-button);
    box-shadow: 0 0.5rem 1rem var(--color-primary-500-25);
  }

  button:hover, .button:hover {
    transform: scale(1.05);
  }

  button:active, .button:active {
    transform: translateY(0.5em);
  }

  .disabled {
    pointer-events: none;
    background-color: var(--color-gray-500) !important;
    box-shadow: none !important;
  }
</style>