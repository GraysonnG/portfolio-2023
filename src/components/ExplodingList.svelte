<script lang="ts">
	// @ts-nocheck
	import { fly } from 'svelte/transition';
	import viewport from '../actions/useViewportAction';
	import { elasticOut } from 'svelte/easing';

	let { items }: { items: string[] } = $props()

	let finished = $state(false);
	let transitionData: {
	  x: number;
	  y: number;
	  duration: number;
	  opacity: number;
	  easing: (t: number) => number;
	}[] = $state([])

	const createTransitionData = () => {

	}

	const onEnter = (e: Event) => {
		if (finished) return;

		const parent = e.target;
		const parentRect = parent.getBoundingClientRect();
		const parentCx = parentRect.left + parentRect.width / 2;
		const parentCy = parentRect.top + parentRect.height / 2;


		parent.childNodes.forEach((node, i) => {
			const nodeRect = node.getBoundingClientRect();
			const nodeCx = nodeRect.left + nodeRect.width / 2;
			const nodeCy = nodeRect.top + nodeRect.height / 2;
			const durOffset = Math.round(Math.random() * 2000 + 2500);

			let offsetX = parentCx - nodeCx;
			let offsetY = parentCy - nodeCy;

			node.classList.add("visible")
			// node.style = `
			// --offsetX: ${offsetX * 0.5}px;
			// --offsetY: ${offsetY * 0.5}px;
			// --duration: ${2400 + durOffset}ms;
			// `.trim()
			//
			// create_in_transition(node, fly, {
			// 	x: offsetX * 0.5,
			// 	y: offsetY * 0.5,
			// 	duration: 2400 + durOffset,
			// 	opacity: 0,
			// 	easing: elasticOut
			// }).start();
		});

		finished = true;
	};
</script>

<div use:viewport onenterViewport={onEnter} class:start={!finished}>

   	{#each items as item, i}
  		<span in:fly={{...transitionData[i]}}>{item}</span>
   	{/each}

</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		opacity: 1;
		will-change: contents;
	}

	.start {
	}

	span {
		position: relative;
		padding: 0.25rem 0.5rem;
		background-color: var(--color-primary-500-25);
		border: 1px solid var(--color-primary);
		border-radius: 3rem;
		font-weight: bold;
		color: var(--color-on-chip);
		transform: translate(0, 0);
		will-change: transform, opacity, top, left;
		overflow: hidden;
		transition:
			scale 1s,
			rotate 1s;
	}

	span:global(.visible) {
        opacity: 1;
	    transform: translate(var(--offsetX), var(--offsetY));
	}

	span:hover {
		scale: 1.1;
	}

	span::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background-color: var(--color-primary-300);
		opacity: 0;
	}

	@media screen and (min-width: 1200px) {
		span {
			padding: 0.5rem 4rem;
			font-weight: 500;
			font-size: 1.5rem;
			flex-grow: 1;
			display: grid;
			place-items: center;
		}
	}
</style>
