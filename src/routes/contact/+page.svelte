<script lang="ts">
  // @ts-nocheck
	import type { ContactData } from "../../api/client";
  import Button from "../../components/Button.svelte";
  import { string } from 'yup';
	import MetaTags from '../../components/meta/MetaTags.svelte';

  export let data: ContactData

  const messageMaxLength = 350
  const nameSchema = string().required().min(2).max(50)
  const emailSchema = string().required().email()
  const messageSchema = string().max(messageMaxLength).required()

  var name = ""
  var email = ""
  var message = ""

  var errorName: string | null = null
  var errorEmail: string | null = null
  var errorMessage: string | null = null

  $: sendEnabled = name != "" && 
                  email != "" && 
                  message != "" && 
                  errorName == null && 
                  errorEmail == null && 
                  errorMessage == null

  const onNameChange = async (e: Event) => {
    try {
      name = await nameSchema.validate(e.target.value)
      errorName = null
    } catch (error) {
      errorName = error.message
      return
    }  
  }

  const onEmailChange = async (e: Event) => {
    try {
      email = await emailSchema.validate(e.target.value)
      errorEmail = null
    } catch (error) {
      errorEmail = error.message
      return
    }
  }

  const onMessageChange = async (e: Event) => {
    try {
      message = await messageSchema.validate(e.target.value)
      errorMessage = null
    } catch (error) {
      errorMessage = error.message
      return
    }
  }
</script>

<svelte:head>
  <title>Grayson's Portfolio | Contact</title>
	<MetaTags
		title="Grayson Gullion | Portfolio | Contact"
		description="Contact me!"
	/>
</svelte:head>

<section class="container">
    <h2 class="form-title">
      { data.leftTitle }
    </h2>
  
    <form
      name="contact-form"
      class="form" 
      method="POST" 
      data-sveltekit-reload="off"
      data-netlify="true"
      action="/success"
      >
      <input type="hidden" name="form-name" value="contact-form" />
      <div class="name">
        <input bind:value={name} on:input={onNameChange} name="name" type="text" placeholder="Name" />
        {#if errorName}
          <span class="error">* {errorName}</span>
        {/if}
      </div>
      <div class="email">
        <input bind:value={email} on:input={onEmailChange} name="email" type="text" placeholder="Email" />
        {#if errorEmail}
          <span class="error">* {errorEmail}</span>
        {/if}
      </div>
      <div class="textarea">
        <div class="wrapper">
          <textarea bind:value={message} on:input={onMessageChange} name="message" placeholder="Your message..." cols=28 rows=6 maxlength="{messageMaxLength}" />
          <span class="character-limit">{message.length} / {messageMaxLength}</span>
        </div>
        {#if errorMessage}
          <span class="error">* {errorMessage}</span>
        {/if}
      </div>
      <Button data={data.sendButton} disabled={!sendEnabled} />
    </form>

    <h2 class="socials-title">{data.rightTitle}</h2>
    <div class="socials">
      <ul>
        {#each data.contactItems as contactItem}
          <li>
						<a href="{contactItem.link}" target="_blank" rel="noopener noreferrer">
							<i class={contactItem.icon}/> {contactItem.text}
						</a>
					</li>
        {/each}
      </ul>
    </div>
</section>


<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    grid-template-areas: 
      "title-form title-socials"
      "form socials";

    column-gap: 8rem;
    row-gap: 0;
    width: 100%;
    padding-bottom: 0rem;
  }

  .other-socials {
    color: var(--color-light);
    text-align: end;
  }


  .socials-title {
    color: var(--color-light);
    grid-area: title-socials;
    text-align: end;
  }

  .socials {
    color: var(--color-light);
    grid-area: socials;
  }

	.socials a {
		color: var(--color-light);
		text-decoration: none;
	}
  .socials ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
  }

  .textarea .wrapper {
    position: relative;
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

  .form-title {
    grid-area: title-form;
  }

  .form, form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    grid-area: form;
    gap: 1rem;
    margin-top: 2rem;
  }

  input, textarea {
    width: 100%;
    padding: 1em;
    border: none;
    background-color: var(--color-container);
    color: var(--color-on-container);
    max-width: 92vw;
  }

  input {
    font-size: 1.2em;
    border-radius: 3em;
    padding-inline: 1.5em;
  }

  textarea {
    border-radius: 1em;
  }

  .character-limit {
    position: absolute;
    bottom: 0.5em;
    right: 1em;
    font-size: 0.8em;
    opacity: 0.5;
  }

  .form :global(button) {
    place-self: start;
    margin-top: 2rem;
  }


  .form textarea, .form .textarea {
    font-size: 1.2rem;
    grid-column: span 2;
    resize: vertical;
  }

  .error {
    margin-left: 2em;
    display:block;
    color: red;
    font-size: 0.8em;
  }

  @media screen and (max-width: 1200px) {
    section {
      grid-template-columns: 1fr;
      grid-template-areas: 
      "title-form"
      "form"
      "title-socials"
      "socials";
      padding-bottom: 8rem;
    }

    .form-wrapper {
      max-width: calc(80vw - 2rem);
    }

    .other-socials {
      color: var(--color-dark);
      text-align: start;
    }

    .socials-title {
      margin-top: 2em;
      color: var(--color-dark);
      text-align: start;
    }
    .socials li {
      color: var(--color-dark);
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
      background-color: rgb(200, 200, 200);
      box-shadow: none;
    }

    .form textarea, .form .textarea {
      grid-column: span 1;
    }
  }
</style>