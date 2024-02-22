<script lang="ts">
  import type { BlogData } from "../../../api/client";
	import Image from "../../../components/Image.svelte";
	import { blogDataToHtml } from "../../../helpers/bloghelper";

  export let data: BlogData;
</script>

<section class="container">
  <Image src={data.img} alt={data.title}/>
  <h2>{data.title}</h2>
  <div class="content">{@html
    blogDataToHtml(data, false)    
    }</div>
</section>

<style>
  section {
    margin-bottom: 30em;
  }

  section > :global(img) {
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
    opacity: 0.7;
  }

  .content > :global(p) {
    margin-bottom: 1rem;
  }

  .content :global(.code) {
    padding: 0.5em;
    font-family: 'Courier New', Courier, monospace;
    background-color: #232323;
    color: white;
    border-radius: 0.5em;
    display: block;
    width: 100%;
  }
  
  .content :global(.code::selection) {
    background-color: var(--color-primary);
    color: white;
  }

  .content :global(.em) {
    font-weight: 500;
    font-stretch: 90%;
    font-variation-settings: "ital" 10;
  }

  .content :global(.underline) {
    border-bottom: 3px solid var(--color-dark);
  }

  .content :global(.strong) {
    font-weight: 700;
  }
</style>