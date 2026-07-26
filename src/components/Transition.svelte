<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Transition {
		transition: Function;
		options: any;
	}

	let { outtr, intr, children }: {
	  outtr: Transition,
	  intr: Transition,
	  children: Snippet,
	} = $props()
</script>

{#key page.url.pathname}
	<div in:fly={intr.options} out:fly|local={outtr.options}>
		{@render children()}
	</div>
{/key}

<style>
</style>
