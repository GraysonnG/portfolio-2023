<script lang="ts">
  import { page } from "$app/stores";
	import { onMount } from "svelte";
  $: path = $page.url.pathname;

  let puck: HTMLElement;

  const movePuckToRect = (rect: DOMRect) => {
    puck.style.width = `${rect.width}px`
    puck.style.height = `${rect.height}px`
    puck.style.left = `${rect.x}px`
    puck.style.top = `${rect.y}px`
  }

  const movePuckToCurrentElement = () => {
    const currentElement = document.querySelector(".active") || document.querySelector(".home")

    if (currentElement) {
      puck.style.setProperty("border-color", getComputedStyle(currentElement as HTMLElement).color)
      const rect = currentElement.getBoundingClientRect()
      movePuckToRect(rect)
    }
  }

  const handleMouseOver = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)
    const rect = target.getBoundingClientRect()

    puck.style.setProperty("border-color", getComputedStyle(target).color)

    movePuckToRect(rect)
  }

  const handleMouseOut = (e: MouseEvent) => {
    movePuckToCurrentElement()
  }

  onMount(() => {
    const currentElement = document.querySelector(".active")
    if (currentElement) {
      setTimeout(() => {
        const rect = currentElement.getBoundingClientRect()
        movePuckToRect(rect)
      }, 100);
    }

    const unsub = page.subscribe(page => {
      if (page.route.id) {
        const element = document.querySelector(`a[href~="${page.route.id}"]`)
        if (!element) return;
        const rect = element.getBoundingClientRect()
        movePuckToRect(rect)
      }
    })

    return () => {
      unsub()
    }
  })
</script>

<svelte:window on:resize={movePuckToCurrentElement}/>

<aside>
  <div class="container">
    <nav on:mouseleave={handleMouseOut} on:blur={() => {}}>
      <ul>
        <li>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            href="/" 
            class={"home"}
            class:active={path === "/"}>Home</a>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            aria-hidden="true"
            href="/" 
            class={"mobile"}
            class:active={path === "/"}>
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            href="/about" 
            class:active={path.includes("about")}>About</a>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            aria-hidden="true"
            href="/about" 
            class={"mobile"}
            class:active={path.includes("about")}>
            <i class="fa-solid fa-user"></i>
          </a>
        </li>
				<li>
					<a
						on:mouseover={handleMouseOver} on:focus={() => {}}
						href="/projects"
						class:active={path.includes("projects")}>Projects</a>
					<a
						on:mouseover={handleMouseOver} on:focus={() => {}}
						aria-hidden="true"
						href="/projects"
						class={"mobile"}
						class:active={path.includes("projects")}>
						<i class="fa-solid fa-table-list"></i>
					</a>
				</li>
        <li>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            href="/blog" 
            class:active={path.includes("blog")}>Blog</a>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            aria-hidden="true"
            href="/blog" 
            class={"mobile"}
            class:active={path.includes("blog")}>
            <i class="fa-solid fa-square-rss"></i>
          </a>
        </li>
        <li>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            href="/contact" 
            class:active={path.includes("contact")}>Contact</a>
          <a 
            on:mouseover={handleMouseOver} on:focus={() => {}}
            aria-hidden="true"
            href="/contact" 
            class={"mobile"}
            class:active={path.includes("contact")}>
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div bind:this={puck} class="puck"></div>
</aside>

<style>
  aside {
    position: sticky;
    width: min(calc(100vw - 8em), 100rem);
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 10000;
    isolation: isolate;
    padding-top: 1em;
    margin: 0 auto;
  }

  .container {
    position: relative;
    width: 100%;
    padding-inline: 1em;
  }

  .container::after {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    height: 100%;
    width: calc(100% + 6em);
    transform: translateX(-50%);
    background-color: transparent;
    transition: background-color 0ms 0ms;
    pointer-events: none;
    user-select: none;
    border-radius: 100em;
  }

  nav {
    position: relative;
  }

  .puck {
    position: fixed;
    width: 0;
    height: 0;
    border-radius: 3em;
    background-color: var(--color-primary-500-25);
    left: 0;
    top: 0;
    z-index: -1;
    transition: left 300ms cubic-bezier(.15,1,.19,1.19), width 300ms, border 300ms;
    pointer-events: none;
  }

  .puck::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid var(--color-primary-300);
    border-radius: 3em;
    opacity: 0.5;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-block: 1.5em;
    display: flex;
    gap: 3em;
  }

  a {
    padding: 1em;
    text-decoration: none;
  }

  a.mobile {
    display: none;
  }

  li > a {
    font-weight: 600;
    font-stretch: 100%;
    transition: color 300ms ease-in-out;
    color: var(--color-on-surface);
  }

  li:first-child {
    flex-grow: 1;
  }

  aside:not(.split) .puck {
    border-color: var(--color-on-surface) !important;
  }

  aside .container::after {
    background-color: transparent;
    opacity: 1;
    backdrop-filter: blur(1em) !important;
    box-shadow: 0 1em 5em rgba(0 0 0 / 0.3);
    z-index: -2;
  }

  aside .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: calc(100% + 6em);
    z-index: -1;
    border-radius: 100em;
    background-color: var(--color-surface);
    border: 1.5px solid var(--color-on-surface-alt);
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    aside {
      position: fixed;
      top: unset;
      bottom: 0;
      left: 0;
      width: 100vw;
      background-color: var(--color-background);
    }
  

    ul {
      gap: 0;
      padding: 0.25em 0em;
      justify-content: space-around;
    }

    li:first-child {
      flex-grow: 0;
    }

    .puck {
      display: none;
    }

    a.mobile {
      box-sizing: border-box;
      display: block;
      padding: 1em 2em;
      border-radius: 3em;
      border: 1px solid transparent;
    }

    a.mobile.active {
      position: relative;
      border: 1px solid var(--color-primary);
    }

    a.mobile.active::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 3em;
      box-shadow: 0 0 0.25em var(--color-dark);
      background-color: var(--color-primary);
      opacity: 0.3;
      z-index: -1;}

    a:not(.mobile) {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    .puck {
      border-color: var(--color-on-surface) !important;
    }

    aside li > a {
      color: var(--color-on-surface);
    }
  }

  @media screen and (max-width: 350px) {
    a.mobile {
      padding: 1em 1.5em;
    }
  }
</style>