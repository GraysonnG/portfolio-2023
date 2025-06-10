<script>
  const darkIcon = 'fa-moon';
  const lightIcon = 'fa-sun';
  export let isSplit;


  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('button i');

    if (!icon) return;

    if (document.body.classList.contains('dark')) {
      icon.className = `fa-solid ${lightIcon}`;
    } else {
      icon.className = `fa-solid ${darkIcon}`;
    }
  }
</script>

<div>
  <button on:click={toggleDarkMode} class:split={isSplit}>
    <i class="fa-solid fa-moon" />
  </button>
</div>

<style>
  div {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  }

  button {
    background: transparent;
    border: 1px solid var(--color-on-surface-alt);
    cursor: pointer;
    font-size: 2em;
    color: var(--color-on-surface);
    transition: all 0.3s ease;
    transition-delay: 500ms;
    aspect-ratio: 1;
    height: 2em;
    border-radius: 50%;
    backdrop-filter: blur(0.5em);
  }

  button::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--color-container);
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: -1;
    opacity: 0.3;
    box-shadow: 0 0 0.25em var(--color-dark);
  }

  button.split {
    border-color: var(--color-light);
    color: var(--color-light);
  }

  @media screen and (max-width: 600px) {
    div {
      bottom: 5rem;
      right: 1rem;
    }

    button.split {
      border-color: var(--color-on-surface-alt);
      color: var(--color-on-surface);
    }
  }
</style>