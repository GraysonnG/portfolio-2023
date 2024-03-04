<script lang="ts">
  import type { BlogData } from "../../../api/client";
	import Button from "../../../components/Button.svelte";
	import Image from "../../../components/Image.svelte";
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  export let data: {
    blog: BlogData,
    html: string,
  };

  var date = new Date(data.blog.date);
  
  onMount(() => {
    hljs.highlightAll()
  })
</script>

<svelte:head>
  <link rel="stylesheet" href="/highlight">
  <title>Grayson's Portfolio | Blog | {data.blog.title}</title>
</svelte:head>

<section class="container">
  <div class="breadcrumb">
    <a href="/blog"><i class="fa-solid fa-arrow-left"></i> Blogs </a>
    <span class="date">Posted {date.toLocaleDateString()}</span>
    <span class="share">Share <i class="fa-solid fa-copy"></i></span>
  </div>
  <div class="hero">
    <Image src={data.blog.img} alt={data.blog.title}>
      <div class="placeholder" />
    </Image>

    <h2>{data.blog.title}</h2>
  </div>
  
  <div class="content">{@html data.html}</div>
</section>

<style>
  section {
    margin-bottom: 30em;
    position: relative;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 30em;
    object-fit: cover;
    border-radius: 1em;
    overflow: hidden;
    margin-bottom: 8em;
  }

  .hero :global(img), .hero :global(.placeholder) {
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    width: 70%;
    color: var(--color-light);
    text-transform: uppercase;
    margin-bottom: 2rem;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: var(--color-dark);
    box-shadow: 0 0 2rem var(--color-dark);
  }

  .content {
    font-size: 1.2rem;
    line-height: 1.75;
    font-weight: 600;
    padding-inline: 2em;
  }

  .content > :global(:not(pre)) {
    opacity: 0.7;
  }

  .content > :global(p) {
    margin-bottom: 2rem;
  }

  .content :global(code) {
    color: var(--color-primary-700);
    background-color: var(--color-primary-500-25);
    border-radius: 0.25rem;
    border: 2px solid var(--color-primary);
    padding: 0.125rem 0.25rem;
  }

  .content :global(pre > code) {
    padding: 0.5em;
    border: none;
    border-radius: 0.5em;
    background-color: #0d1117;
    color: var(--color-light);
    display: block;
    width: 100%;
    line-height: 1.2;
    outline: 3px solid var(--color-white);
    box-shadow: 0 0 1rem rgba(0,0,0,0.5);
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

  .content :global(blockquote) {
    padding: 1rem;
    border-left: 3px solid var(--color-primary-700);
    background-color: var(--color-primary-500-25);
    color: var(--color-primary-900);
    margin-inline: 0;
    margin-block: 2rem;
    border-radius: 0 0.5em 0.5em 0em;
  }

  .content :global(a) {
    position: relative;
    color: var(--color-primary);
    text-decoration: none;
    border-bottom: 3px solid var(--color-primary);
  }

  .content :global(a::after) {
    position: relative;
    top: -1px;
    content: "\f08e";
    font-family: "Font Awesome 6 Free";
    font-size: 1rem;
    margin-inline-start: 0.5em;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1em;
  }

  .breadcrumb a {
    text-decoration: none;
    color: var(--color-dark);
    border-bottom: 3px solid transparent;
    transition: border-bottom 300ms ease-in-out;
  }

  .breadcrumb a:hover, .share:hover {
    border-bottom: 3px solid var(--color-dark);
  }

  .share {
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: border-bottom 300ms ease-in-out;
  }
</style>