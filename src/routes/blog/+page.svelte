<script lang="ts">
  import type { BlogData } from "../../api/client";
	import Card from "../../components/Card.svelte";
  import { parse } from "marked";
	import Image from "../../components/Image.svelte";
  export let data: {
    blogs: BlogData[]
  }
</script>

<svelte:head>
  <title>Grayson's Portfolio | Blogs</title>
</svelte:head>

<section class="container">
  {#if data.blogs.length > 0}
    <div class="blogs">
      {#each data.blogs as blog}
        <Card 
          href={`/blog/${blog.slug}`}
          img={blog.img} 
          langs={[]} 
          buttons={[]}>
          <h2 slot="title">{blog.title}</h2>
          <p slot="description">
            {@html 
              parse(blog.markdown).toString().slice(0, 350).concat("...")
            }
          </p>
        </Card>
      {/each}
    </div>
  {:else}
    <div class="content">
      <div>
        <h1>Nothing to see here yet!</h1>
        <p class="subtitle">Except maybe a cat gif...</p>
      </div>
      <Image src={"/cat"} alt="cat gif">
        <div class="placeholder"></div>
      </Image>
    </div>
  {/if}
</section>


<style>
  h1 {
    width: 100%;
    text-align: center;
    line-height: 1;
    font-size: 4em;
    font-weight: 900;
    font-stretch: 115%;
    text-transform: capitalize;
  }

  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  .content :global(img) {
    width: min(30em, 100%);
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 0.5em;
    filter: saturate(0%);
  }

  .placeholder {
    width: min(30em, 100%);
    aspect-ratio: 1;
    background-color: var(--color-light);
    border-radius: 0.5em;
  }

  .subtitle {
    color: var(--color-primary);
    opacity: 0.7;
    font-size: 1.25em;
    font-weight: 600;
    font-stretch: 100%;
  }
</style>