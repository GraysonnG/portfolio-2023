<script> 
	import { onMount } from "svelte"
	import isSplit from "../helpers/splithelper"
  import { page } from "$app/stores"

  // generate 8 sets of 3-5 points
  let clientWidth = 0
  $: numShapes = Math.ceil(clientWidth / 40)
  $: shapes = (() => {
    const arr = []
    for (let i = 0; i < numShapes; i++) { arr.push(generateShape(i)) }
    return arr
  })()
  $: stars = Array.from({ length: 128 }, () => {
    return { x: Math.random() * 100, y: Math.random() * 100 }
  })

  // animate the shapes slowly in a random direction
  onMount(() => {
    window.onmousemove = handleMouseOverSVG
    let svgs = document.querySelectorAll("svg.random-shape")

    setInterval(() => {
      if (svgs.length != shapes.length) {
        console.log("updating svgs")
        svgs = document.querySelectorAll("svg.random-shape")
      }
    }, 1000)

    setInterval(() => {
      if (svgs.length > 0) {
        const shape = svgs[Math.floor(Math.random() * svgs.length)]
        const star = document.getElementById(`star-${Math.floor(Math.random() * stars.length)}`)
        shape.dataset.hovered = "true"
        star.dataset.hovered = "true"
        setTimeout(() => {
          shape.dataset.hovered = "false"
          star.dataset.hovered = "false"
        }, 2000)
      }
    }, 1000)


    function animateShapes() {
      for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].isDead) {
          shapes[i] = generateShape(i)
        }
      }

      shapes.forEach(shape => {
        const svg = document.getElementById(shape.id)
        shape.split = isSplit($page.route.id)
        shape.hovered = svg?.dataset.hovered === "true"
        shape.x += Math.cos(shape.angle) * shape.speed
        shape.y += Math.sin(shape.angle) * shape.speed
        shape.rotation += shape.rotationSpeed
        shape.opacity += 0.01
        if (shape.opacity > 1) shape.opacity = 1
        if (shape.rotation >= 360) shape.rotation -= 360
        if (shape.x < 0 || shape.x > 100 || shape.y < 0 || shape.y > 100) shape.isDead = true
      })
      
      shapes = shapes

      requestAnimationFrame(animateShapes)
    }

    animateShapes()

    return () => {
      window.onmousemove = null
    }
  })

  function generateShape(index) {
    const numPoints = Math.floor(Math.random() * 3) + 3 // 3 to 5 points
    const points = Array.from({ length: numPoints }, () => {
      const x = 5 + Math.random() * 90
      const y = 5 + Math.random() * 90
      return { 
        x,
        y,
      }
    })

    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      id: `shape-${index}`,
      angle: Math.random() * 2 * Math.PI,
      speed: 0.001 + Math.random() * 0.005,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      rotation: 0,
      opacity: 0,
      split: isSplit($page.route.id),
      hovered: false,
      isDead: false,
      points
    }
  }

  // a function that given an svg element, determines if the mouse pointer is over the svg
  function handleMouseOverSVG(event) {
    const svgs = document.querySelectorAll("svg")
    svgs.forEach((svg) => {
      const rect = svg.getBoundingClientRect()
      const mouseX = event.clientX
      const mouseY = event.clientY
      const hitArea = -25 // percent of the shape
      const xWithinHitArea = rect.left + (rect.width * (hitArea / 100)) / 2 <= mouseX && mouseX <= rect.right - (rect.width * (hitArea / 100)) / 2
      const yWithinHitArea = rect.top + (rect.height * (hitArea / 100)) / 2 <= mouseY && mouseY <= rect.bottom - (rect.height * (hitArea / 100)) / 2
      const withinHitArea = xWithinHitArea && yWithinHitArea

      if (withinHitArea) {
        svg.dataset.hovered = "true"
        setTimeout(() => {
          svg.dataset.hovered = "false"
        }, 2000)
      }
    })
  }
</script>

<div class="overlay" bind:clientWidth={clientWidth}>
  {#each stars as star, index}
    <svg
      id="star-{index}"
      style="position: absolute; top: {star.y}%; left: {star.x}%; width: 1rem; height: 1rem; transform: translate(-50%, -50%);"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="3" style="fill: transparent; stroke: var(--color-decoration); stroke-width: 1.5;"/>
    </svg>
  {/each}

  {#each shapes as shape}
    <svg
      class="random-shape" 
      id="{shape.id}"
      style="opacity: {shape.opacity}; top:{shape.y}%; left: {shape.x}%; position: absolute; transform: translate(-50%, -50%) rotate({shape.rotation}deg);"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      data-hovered="{shape.hovered}"
      stroke="{shape.split ? 'var(--color-decoration-split)' : 'var(--color-decoration)'}">
      <polygon points="{shape.points.map(point => `${point.x} ${point.y}`).join(', ')}" style="fill: transparent; stroke-width: 1;"/>
      {#each shape.points as point}
        <circle cx="{point.x}" cy="{point.y}" r="3" style="fill: transparent; stroke: stroke-width: 1;"/>
      {/each}
    </svg>
  {/each}
</div>

<style>
  .random-shape {
    width: 200px;
    height: 200px;
  }

  svg {
    transition: scale 0.5s ease;
    transform-origin: center center;
  }

  svg polygon, svg circle {
    transition: stroke 0.5s ease;
  }

  :global(.overlay svg[data-hovered="true"]) circle {
    stroke: var(--color-primary-300) !important;
    z-index: 2;
  }

  :global(.overlay svg[data-hovered="true"]) polygon {
    stroke: var(--color-primary-300) !important;
    z-index: 2;
  }

  :global(.overlay svg[data-hovered="true"]) {
    z-index: 2;
    scale: 1.01;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -3;
  }
</style>