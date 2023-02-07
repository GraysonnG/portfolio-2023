<script>
  let name, email, message, button

  


</script>


<section class="container">
  <div class="form-wrapper">
    <h2>
      Send a message
    </h2>
  
    <form class="form" method="POST" data-sveltekit-reload="off">
      <input bind:this={name} name="name" type="text" placeholder="Name" />
      <input bind:this={email} name="email" type="text" placeholder="Email" />
      <textarea bind:this={message} name="message" placeholder="Your message..." cols=28 rows=6 />
      <button bind:this={button} class="primary">Send</button>
    </form>
  
    
  </div>

  <div class="other-socials">
    <h2>Or Hit me up!</h2>

    <ul>
      <li>graysongullion@gmail.com</li>
      <li>Blank The Evil#6534</li>
      <li>Grayson Gullion</li>
      <li>GraysonnG</li>
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
    font-weight: 500;
    font-size: 1.2rem;
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

  button {
    place-self: start;
  }


  .form textarea {
    font-size: 1.2rem;
    grid-column: span 2;
    resize: vertical;
  }

  button {
    margin-top: 2rem;
  }

</style>