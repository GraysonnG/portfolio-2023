<script lang="ts">
  // @ts-nocheck
	import type { ContactData } from "../../api/client";
  import Button from "../../components/Button.svelte";

  export let data: ContactData

  let form: HTMLFormElement

  const resetForm = () => {
    form.childNodes.forEach(elem => {
      elem.value = ""
    })
  }
</script>

<svelte:head>
  <title>Grayson's Portfolio | Contact</title>
</svelte:head>

<section class="container">
  <div class="form-wrapper">
    <h2>
      { data.leftTitle }
    </h2>
  
    <form
      bind:this={form}
      name="contact-form"
      class="form" 
      method="POST" 
      data-sveltekit-reload="off"
      data-netlify="true"
      action="/success"
      >
      <input type="hidden" name="form-name" value="contact-form" />
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
    padding-bottom: 0rem;
  }

  .other-socials {
    color: var(--color-light);
    text-align: end;
  }

  .other-socials ul {
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
    line-height: 1.1;
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
    max-width: 92vw;
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

  @media screen and (max-width: 1200px) {
    section {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content;
      padding-bottom: 8rem;
    }

    .form-wrapper {
      max-width: calc(80vw - 2rem);
    }

    .other-socials {
      color: var(--color-dark);
      text-align: start;
    }

    .other-socials li {
      justify-content: start;
    }
  }

  @media screen and (max-width: 800px) {
    .form, form {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content min-content;
    }

    .form-wrapper {
      max-width: unset;
    }

    input, textarea {
      background-color: var(--color-light);
      box-shadow: none;
    }

    .form textarea {
      grid-column: span 1;
    }
  }
</style>