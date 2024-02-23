<script lang="ts">
  import type { BlogData } from "../../../api/client";
	import Image from "../../../components/Image.svelte";
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  export let data: {
    blog: BlogData,
    html: string,
  };
  
  onMount(() => {
    hljs.highlightAll()
  })
</script>

<svelte:head>
  <link rel="stylesheet" href="/highlight">
  <title>Grayson's Portfolio | Blog | {data.blog.title}</title>
</svelte:head>

<section class="container">
  <Image src={data.blog.img} alt={data.blog.title}>
    <div class="placeholder" />
  </Image>
  <h2>{data.blog.title}</h2>
  <div class="content">{@html data.html}</div>
</section>

<style>
  section {
    margin-bottom: 30em;
  }

  section > :global(img), section .placeholder {
    width: 100%;
    height: 30em;
    object-fit: cover;
    border-radius: 1em;
    margin-bottom: 4em;
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .content {
    font-size: 1.2rem;
    line-height: 1.75;
    font-weight: 600;
  }

  .content > :global(:not(pre)) {
    opacity: 0.7;
  }

  .content > :global(p) {
    margin-bottom: 1rem;
  }

  .content :global(code) {
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: #0d1117;
    color: var(--color-light);
    display: block;
    width: 100%;
  }
  
  .content :global(code::selection), .content :global(code *::selection){
    background-color: var(--color-primary);
    color: white;
  }

  .content :global(em) {
    font-weight: 500;
    font-stretch: 90%;
    font-variation-settings: "ital" 10;
  }

  .content :global(underline) {
    border-bottom: 3px solid var(--color-dark);
  }

  .content :global(strong) {
    font-weight: 700;
  }
</style>