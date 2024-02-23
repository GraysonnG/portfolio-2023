<script lang="ts">
  import type { BlogData } from "../../api/client";
	import Card from "../../components/Card.svelte";
  import { parse } from "marked";
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
      <h1>Nothing to see here!</h1>
      <img src={"https://cataas.com/cat/gif"} alt=""/>
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

  img {
    width: min(30em, 100%);
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 0.5rem;
    filter: saturate(0%);
  }
</style>