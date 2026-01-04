<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { cubicInOut } from "svelte/easing";
	import { create_in_transition } from "svelte/internal";
	import { fly } from "svelte/transition";
	import type { ContactItem, HomeData } from '../api/client';
	import Button from "../components/Button.svelte";
	import MetaTags from "../components/meta/MetaTags.svelte";

  let h1: HTMLElement
  let sub: HTMLElement
  let cta: HTMLElement

  export let data: {
    home: HomeData,
		contactItems: ContactItem[],
  }

	afterNavigate(({ from }) => {
    if(from === null) {
      create_in_transition(h1, fly, { x: -1000, duration: 2500, easing: cubicInOut }).start()
      create_in_transition(sub, fly, { x: -1000, duration: 2500, delay: 600, easing: cubicInOut }).start()
      create_in_transition(cta, fly, { y: 1000, duration: 3100, easing: cubicInOut }).start()
    }
  })

</script>
<svelte:head>
  <title>Grayson's Portfolio | Home</title>
  <MetaTags 
    title="Grayson Gullion | Portfolio"
    description="Grayson Gullion's portfolio website. A place to showcase my work and projects."
    />
</svelte:head>

<section class="container">
  <h1 bind:this={h1}>{ data.home.mainHeading }</h1>
  <div bind:this={sub} class="subtitle">
		<p >{ data.home.subHeading }</p>
		<div class="contact">
			{#each data.contactItems.filter((i) => i.link) as info }
				<a href="{info.link}" target="_blank" rel="noopener noreferrer">
					<i class="{info.icon}" />
				</a>
			{/each}
		</div>
	</div>

  <div class="cta" bind:this={cta}>
    {#each data.home.buttons as button}
      <Button data={button} />
    {/each}
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 6rem;
    font-style: normal;
    text-transform: uppercase;
    text-align: start;
  }

  h1 {
    position: relative;
    display: inline-block;
    font-size: 17vw;
    font-weight: 900;
    font-stretch: 110%;
    line-height: 1;
    color: transparent;
    background: linear-gradient(-90deg, var(--color-primary), var(--color-primary-700));
    -webkit-background-clip: text;
    background-clip: text;
    width: 100%;
    overflow: hidden;
  }

  p {
    display: inline-block;
    width: 100%;
    margin-top: 1rem;
    position: relative;
    left: 0.25em;
    font-size: 6vw;
    font-weight: 900;
    font-stretch: 125%;
    max-width: 100vw;
  }

  .subtitle {
		display: flex;
		flex-direction: column;
  }

	.contact {
			margin-top: 1rem;
			position: relative;
			display: flex;
			flex-direction: row;
			gap: 1.5em;
			left: 1em;
	}

	.contact a {
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: center;
			aspect-ratio: 1;
			font-size: 1.5em;
			height: 2em;
			border-radius: 50%;
			color: var(--color-on-surface);
			transition: color 0.2s, background 0.5s, scale 1s;
	}

	.contact a:hover {
      color: var(--color-on-button);
      background: var(--color-primary);
			scale: 1.1;
	}

  .cta {
    position: relative;
    margin-top: 6em;
    display: grid;
    gap: 1rem;
    font-size: 0.8em;
  }

  h1, p, .cta {
    will-change: transform;
  }

  .cta :global(.primary) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 1200px) {
    section {
      margin-top: 0;
      text-align: start;
    }

    h1 {
      font-weight: 900;
      font-stretch: 110%;
      font-size: 12em;
      line-height: .9;
    }

    p {
      font-weight: 900;
      font-stretch: 125%;
      font-size: 2em;
      padding-left: 1rem;
      margin: 0;
      max-width: 45vw;
    }

    .cta {
      display: flex;
      font-size: 1em;
      flex-direction: row;
      padding-left: 1rem;
      gap: 2rem;
      align-items: center;
      justify-content: unset;
    }

    .cta :global(.primary) {
      font-size: 1em;
    }
  }

  :global(body.dark) h1 {
    background: var(--color-primary);
      -webkit-background-clip: text;
      background-clip: text;
  }
</style>