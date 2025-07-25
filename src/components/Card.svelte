<script lang="ts">
  // @ts-nocheck
	import { create_in_transition } from "svelte/internal";
	import { fly } from "svelte/transition";
	import viewport from "../actions/useViewportAction";
	import type { Button as ButtonType } from "../api/client";
	import Button from "./Button.svelte";
	import Image from "./Image.svelte";
	import { goto } from "$app/navigation";

  export let img: string
  export let langs: string[]
  export let buttons: ButtonType[]
  export let href: string = null

  let me: HTMLElement
  let finished = false

  const onClick = () => {
    if (href) {
      goto(href)
    }
  }

  const onEnter = () => {
    if (!finished) {
      create_in_transition(me, fly, { x: 200, duration: 1200 }).start()
      finished = true
    }
  }
</script>

<div 
  use:viewport 
  on:click={onClick}
  on:keypress={{}}
  on:enterViewport={onEnter}
  class:clickable={href !== null}
  class="card" bind:this={me}>
  <Image src={img}><div class="img-placeholder" /></Image>
  <div class="content">
    <div class="text">
      <slot name="title"/>
      <slot name="description" />
    </div>
    <div class="chips">
      {#each langs as lang}
        <div class="chip">{lang}</div>
      {/each}
    </div>
    <div class="buttons">
      {#each buttons as button}
        <Button data={button}/>
      {/each}
    </div>
  </div>
</div>

<style>
  .card {
    position: relative;
    height: 25rem;
    isolation: isolate;
    display: flex;
    gap: 4em;
  }

  .clickable {
    cursor: pointer;
    transition: all 600ms;
    border-radius: 0.5em;
  }

  .clickable:active,
  .clickable:hover {
    transform: scale(1.05);
  }

  .clickable:active {
    transform: translateY(1em);
  }

  .card:nth-child(2n) {
    flex-direction: row-reverse;
  }

  .card :global(img), .img-placeholder {
    border-radius: 0.5rem;
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .img-placeholder {
    background-color: var(--color-surface);
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
    grid-template-areas: 
      "content content"
      "tags buttons";
    gap: 1.5em;
  }

  .text {
    grid-area: content;
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 1rem;
  }

  .card :global(h2) {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  .card :global(p) {
    font-size: 1.2rem;
    line-height: 1.75;
    font-weight: 450;
    opacity: 0.7;
    margin-top: 1rem;
  }

  .chips {
    margin-top: auto;
    display: flex;
    gap: .75em;
    grid-area: tags;
    flex-wrap: wrap;
  }

  .chip {
    font-weight: 600;
    color: var(--color-on-chip);
    background-color: var(--color-primary-500-25);
    padding: 0.25rem 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 3rem;
  }

  @media screen and (max-width: 1200px) {
    .card {
      height: unset;
      flex-direction: column;
      width: 100%;
      gap: 2em;
      font-size: 12px;
      align-items: center;
    }

    .card:nth-child(2n) {
      flex-direction: column;
    }

    .card :global(img), .img-placeholder {
      height: unset;
      max-width: 100%;
      max-height: 15rem;
      width: 15rem;
    }

    .card :global(p) {
      font-size: 1rem;
      font-weight: 600;
      opacity: 0.7;
    }

    .chips {
      flex-wrap: wrap;
    }

    .buttons {
      flex-wrap: wrap;
    }

    .content {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr min-content min-content;
      grid-template-areas: 
        "content"
        "tags"
        "buttons";
      gap: 3em;
    }
  }
</style>