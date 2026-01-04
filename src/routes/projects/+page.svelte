<script lang="ts">
	import Card from "../../components/Card.svelte";
	import type { ProjectsData } from "../../api/client";
	import MetaTags from '../../components/meta/MetaTags.svelte';
 
  export let data: ProjectsData
</script>

<svelte:head>
  <title>Grayson's Portfolio | Projects</title>
	<MetaTags
		title="Grayson Gullion | Portfolio | Projects"
		description="My projects that I have worked on throughout the years."
	/>
</svelte:head>

<section class="container">
  {#each data.projects as project}
    <Card img={project.img} langs={project.tags} buttons={project.buttons}>
      <h2 slot="title">{ project.title }</h2>
      <p class="description" slot="description">{ project.description }</p>
    </Card>
  {/each}
</section>

<style>
  section {
    display: grid;
    gap: 8em;
    padding-bottom: 10em;
  }

  @media screen and (min-width: 1200px) {
    section {
      padding-bottom: 20em;
      gap: 12em;
    }
  }

  @media screen and (min-width: 2000px) {
    section {
      gap: 18em;
    }
  }
</style>