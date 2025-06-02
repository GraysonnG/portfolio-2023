<script lang="ts">
  import type { BlogData } from "../../api/client";
	import Image from "../../components/Image.svelte";
	import markdownToTxt from "../../helpers/mdtotxt";
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
        <a class="blog" href="/blog/{blog.slug}">
          <div class="img">
            <Image src={blog.img} alt={blog.title}>
              <div class="placeholder"></div>
            </Image>
          </div>
          <div class="card-content">
            <h2>{blog.title}</h2>
            <p>
              {markdownToTxt(blog.markdown).slice(0, 350).concat("...")}
            </p>
          </div>
        </a>
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

  .blog {
    position: relative;
    isolation: isolate;
    display: flex;
    text-decoration: none;
    color: var(--color-on-surface);
  }

  .blog::after {
    z-index: -1;
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1em;
    border: 3px solid transparent;
    transition: all 300ms ease-in-out;
  }

  .blog:hover::after {
    inset: -0.5rem;
    border: 3px solid var(--color-on-surface);
  }

  .blog .card-content {
    margin-inline-start: 1em;
    width: 100%;
  }

  .blog h2 {
    font-size: 2.5em;
    font-weight: 900;
    font-stretch: 115%;
    text-transform: capitalize;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .blog p {
    font-size: 1.2rem;
    font-weight: 600;
    font-stretch: 100%;
    line-height: 1.75;
    opacity: 0.7;
  }

  .placeholder {
    width: min(20em, 100%);
    aspect-ratio: 1;
    background-color: var(--color-surface);
    border-radius: 0.5em;
  }

  .img {
    width: 20em;
    aspect-ratio: 1;
  }

  .img :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5em;
  }

  .subtitle {
    color: var(--color-primary);
    opacity: 0.7;
    font-size: 1.25em;
    font-weight: 600;
    font-stretch: 100%;
  }

  .blogs {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media screen and (max-width: 1200px) {
    .blogs {
      gap: 8rem;
    }

    .blog {
      flex-direction: column;
      gap: 1em;
      align-items: center;
    }

    .blog .card-content {
      margin-inline-start: 0;
    }

    .img {
      width: 15rem;
      margin-bottom: 2em;
    }
  }
</style>