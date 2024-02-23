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
</section>