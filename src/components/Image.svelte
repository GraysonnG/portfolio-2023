<script lang="ts">
	import type { Snippet } from 'svelte';
	import viewport from '../actions/useViewportAction';

	interface Props {
	  src: string;
	  alt?: string;
	  clazz?: string;
	  children?: Snippet;
	}

	let { src, alt, clazz, children }: Props = $props()

	let loaded = $state(false);
	let vsrc = $state('');

	const finished = () => {
		setTimeout(() => {
			loaded = !loaded;
		}, 0);
	};

	const loadImage = () => {
		vsrc = src;
	};
</script>

{#if !loaded && children}
    {@render children()}
{/if}


<div class="img-wrapper">
    <img
    	class={clazz}
    	use:viewport
    	onenterViewport={loadImage}
    	onload={finished}
    	class:loaded
    	{alt}
    	src={vsrc}
    />
    <img
        class={clazz + " shadow"}
    	class:loaded
    	{alt}
    	src={vsrc}
     />
</div>

<style>
	img {
        width: 100%;
        opacity: 1;
		transition:
			opacity 1000ms,
			scale 1000ms;
	}

	img:not(.loaded) {
		opacity: 0;
		position: absolute;
	}

	img:hover {
		scale: 1.05;
	}

	div {
	    position: relative;
	    isolation: isolate;
	}

	img.shadow {
	    position: absolute;
		z-index: -1;
		inset: 0;
		filter: blur(1em);
		opacity: 0.5;

		&:hover {
		    scale: 1;
		}
	}
</style>
