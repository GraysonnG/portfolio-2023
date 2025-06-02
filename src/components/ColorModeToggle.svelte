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

  div button.split {
    border-color: var(--color-light);
    color: var(--color-light);
  }

  button {
    background: transparent;
    border: 3px solid var(--color-on-surface);
    cursor: pointer;
    font-size: 2em;
    color: var(--color-on-surface);
    transition: all 0.3s ease;
    transition-delay: 500ms;
    aspect-ratio: 1;
    height: 2em;
    border-radius: 50%;
  }
</style>