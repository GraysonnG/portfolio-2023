<script lang="ts">
  import type { BlogData, Button } from "../../api/client";
	import Card from "../../components/Card.svelte";
	import { blogDataToHtml } from "../../helpers/bloghelper";
  export let data: {
    blogs: BlogData[]
  }

  const createButton = (blogData: BlogData): Button => {
    return {
      title: "Read More",
      url: `/blog/${blogData.slug}`,
      icon: "arrow-right",
      primary: true,
    }
  }


</script>

<section class="container">
  <div class="blogs">
    {#each data.blogs as blog}
      <Card 
      img={blog.img} 
      langs={[]} 
      buttons={[createButton(blog)]}>
        <h2 slot="title">{blog.title}</h2>
        <p slot="description">
          {@html 
            `${blogDataToHtml(blog, true)
              .slice(0, 350)}...`
          }
        </p>
      </Card>
    {/each}
  </div>
</section>