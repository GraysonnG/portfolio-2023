<script lang="ts">
  var number = 0;

  const handleNumberButtonClicked = () => {
    number += 1;
  }
</script>

<section>
  <div class="content">
    <button on:click={handleNumberButtonClicked}>
      {number}
    </button>
  </div>
</section>

<style>
  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }


  button {
    display: block;
    font-size: 4em;
    font-weight: 900;
    font-stretch: 125%;
    aspect-ratio: 1;
    width: 3em;
    border-radius: 0.3em;
    border: none;
    box-shadow: 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.1);
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
  }

  button:hover {
    background-color: var(--color-primary-700);
    transform: translateY(-0.1em) scale(1.05);
  }

  button:active {
    transform: translateY(0.1em) scale(0.95);
  }
</style>