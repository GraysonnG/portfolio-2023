<script>
	import Button from "../../components/Button.svelte";

  export let message = "Success!";
</script>

  <section class="container">
    <h1>{message}</h1>
    <p>Thanks for your message!</p>
    <Button 
      data={{ title: "Go back home", url: "/" , icon: "", primary: true}} />
  </section>

<style>

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: inline-block;
    font-size: 5vw;
    font-weight: 900;
    font-stretch: 110%;
  }

  p {
    font-size: 1.2rem;
    display: inline-block;
    margin-bottom: 4rem;
  }
</style>
