<script lang="ts">
  // @ts-nocheck
  import { create_in_transition } from "svelte/internal";
  import { fly } from "svelte/transition";
	import viewport from "../actions/useViewportAction";

  let me: HTMLElement
  let finished = false

  const onEnter = () => {
    if (!finished) {
      create_in_transition(me, fly, { x: 200, duration: 1200 }).start()
      finished = true
    }
  }
</script>

<div
  bind:this={me}
  use:viewport
  on:enterViewport={onEnter}>
  <slot />
</div>