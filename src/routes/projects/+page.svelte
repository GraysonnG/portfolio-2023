<script lang="ts">
	import Card from "../../components/Card.svelte";
	import type { ProjectsData } from "../../api/client";
 
  export let data: ProjectsData
</script>
<section class="container">
  {#each data.projects as project}
    <Card img={project.img} langs={project.tags} buttons={project.buttons}>
      <h2 slot="title">{ project.title }</h2>
      <p slot="description">{ project.description }</p>
    </Card>
  {/each}
</section>

<style>
  section {
    display: grid;
    gap: 12em;
    padding-bottom: 12em;
  }

  @media screen and (min-width: 2000px) {
    section {
      gap: 18em;
    }
  }
</style>