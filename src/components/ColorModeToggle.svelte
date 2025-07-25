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
    display: block;
    background: transparent;
    border: 1px solid var(--color-on-surface-alt);
    cursor: pointer;
    font-size: 2em;
    color: var(--color-on-surface);
    aspect-ratio: 1;
    transition: all 300ms;
    height: 2em;
    border-radius: 50%;
    box-shadow: 0 0 1em 0 rgba(0 0 0 / 0.3);
  }

  button::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: transparent;
    border-radius: 50%;
    z-index: -1;
    opacity: 1;
  }

  button::after {
    border-radius: 50%;
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(0.5em);
    z-index: -2;
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