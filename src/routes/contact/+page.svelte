<script lang="ts">
	import type { ContactData } from "../../api/client";
  import Button from "../../components/Button.svelte";

  export let data: ContactData
</script>

<section class="container">
  <div class="form-wrapper">
    <h2>
      { data.leftTitle }
    </h2>
  
    <form class="form" method="POST" data-sveltekit-reload="off">
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="text" placeholder="Email" />
      <textarea name="message" placeholder="Your message..." cols=28 rows=6 />
      <Button data={data.sendButton} />
    </form>
  </div>

  <div class="other-socials">
    <h2>{ data.rightTitle }</h2>
    <ul>
      {#each data.contactItems as contactItem}
        <li><i class={contactItem.icon}/> {contactItem.text}</li>
      {/each}
    </ul>
  </div>
</section>


<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    width: 100%;
  }

  .other-socials {
    color: var(--color-light);
    text-align: end;
  }

  .other-socials ul {
    display: block;
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
  }

  li {
    display: flex;
    font-weight: 500;
    font-size: 1.2rem;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    font-stretch: 125%;
    text-transform: uppercase;

  }

  .form, form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    gap: 1rem;
    margin-top: 2rem;
  }

  input, textarea {
    padding: 1em;
    border: 3px solid var(--color-dark);
    box-shadow: 0 5px 20px var(--color-white);
    border-radius: 0.3rem;
    background-color: transparent;
  }

  input {
    font-size: 1.2em;
    
  }

  .form :global(button) {
    place-self: start;
    margin-top: 2rem;
  }


  .form textarea {
    font-size: 1.2rem;
    grid-column: span 2;
    resize: vertical;
  }

</style>