<script>
	import Card from "../../components/Card.svelte";

  import image from "../../assets/hero-image.avif";

</script>
<section class="container">
  <Card img={image} langs={["Svelte", "GraphQL", "Typescript"]}>
    <h2 slot="title">What Blank is Watching</h2>
    <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget bibendum nisi, at fringilla nunc. Mauris maximus vel justo vitae vulputate. Pellentesque justo massa, viverra vel elit eget, porttitor auctor enim. </p>
  </Card>
  <Card img={image} langs={["Svelte", "GraphQL", "Typescript", "SCSS"]}>
    <h2 slot="title">Some Other Project</h2>
    <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget bibendum nisi, at fringilla nunc. Mauris maximus vel justo vitae vulputate. Pellentesque justo massa, viverra vel elit eget, porttitor auctor enim. </p>
  </Card>
  <Card img={image} langs={["Svelte", "GraphQL", "Typescript", "SCSS"]}>
    <h2 slot="title">Some Third Project</h2>
    <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget bibendum nisi, at fringilla nunc. Mauris maximus vel justo vitae vulputate. Pellentesque justo massa, viverra vel elit eget, porttitor auctor enim. </p>
  </Card>
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