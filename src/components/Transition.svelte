<script lang="ts">
  import { navigating } from "$app/stores"

  interface Transition {
    transition: Function;
    options: any;
  }

  export let outtr: Transition
  export let intr: Transition

  $: trin = intr.transition
  $: trout = outtr.transition
</script>

{#key $navigating}
    {#if !$navigating}
      <div in:trin={intr.options} out:trout={outtr.options}>
        <slot />
      </div>
    {/if}
{/key}

<style>
</style>