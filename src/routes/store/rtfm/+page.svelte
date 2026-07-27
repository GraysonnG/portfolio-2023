<script lang="ts">
	import Image from "../../../components/Image.svelte";

	let enshitificationLevel = $state(0)

	const price: string[] = [
   	    "Free",
     	"$1050",
     	"$5/m",
        "$100/m",
        "Way too fucking much"
	]

	const title: string[] = [
	    "RTFM - Hard Cover",
		"RTFM - Hard Cover",
		"RFTM - DIGITAL ONLY",
		"AI RTFM - DIGITAL ONLY",
		"It's Just An SUV Now"
	]

	const maxColors: number[] = [
	    5,
		5,
		3,
		1,
		1,
	]

	const reviews: number[] = [
        5,
        5,
        4,
        1,
        1,
	]

    const colors: Record<string, string> = {
      "Navy":"#01295F;",
      "Ocean Blue":"#437F97;",
      "Olive":"#849324;",
      "Yellow":"#FFB30F;",
      "Rosey Cheeks":"#FD151B;"
    }

    let selectedIndex = $state(0)
    let selectedColor = $derived(Object.keys(colors)[selectedIndex])

    function selectColor(index: number) {
      selectedIndex = index
      const elements = document.querySelectorAll(".color-item");
      elements.forEach(element => {
        element.classList.remove("selected");
      })

      elements[index].classList.add("selected")
    }

    function enshitify() {
      if (enshitificationLevel < 4) {
        enshitificationLevel += 1
        selectedColor = Object.keys(colors)[Math.min(selectedIndex, maxColors[enshitificationLevel] - 1)]
      } else {
        enshitificationLevel = 0
      }
    }
</script>

<section class="container">
    <div class="product-image" style="--product-color: {colors[selectedColor]};" class:tint={enshitificationLevel < 4}>
        {#if enshitificationLevel < 4}
            <Image src="/book.jpg" />
        {:else}
            <Image src="/suv.jpg" />
        {/if}
    </div>
    <div class="product-menu">
        <h1>{title[enshitificationLevel]}</h1>
        <h2>For when you don't follow the instructions.</h2>
        <div class="price-rating">
            <div class="price"><h3>{price[enshitificationLevel]}&nbsp;</h3></div>
            <div class="rating">
                {#each { length: reviews[enshitificationLevel] } as _ }
                    <i class="fa-solid fa-star"></i>
                {/each}
                {#each { length: 5 - reviews[enshitificationLevel] } as _ }
                    <i class="fa-regular fa-star"></i>
                {/each}
                <span>(1337)</span>
            </div>
        </div>
        {#if enshitificationLevel < 4}
            <h4>Selected Color: {selectedColor}</h4>
        {:else}
            <h4>You get black ok, fuck your personality.</h4>
        {/if}
        <div class="color-selector">
            {#if enshitificationLevel < 4}
                {#each Object.entries(colors).slice(0, maxColors[enshitificationLevel]) as color, i}
                   <button title="" onclick={() => { selectColor(i) }} class="color-item" class:selected={selectedColor == color[0]} id="color-{i}" style="--item-color: {color[1]};"></button>
                {/each}
            {:else}
                <button title="" class="color-item" class:selected={true} id="color-5" style="--item-color: #000;"></button>
            {/if}
        </div>

        <div class="fake-section">Details <i class="fa-regular fa-plus"></i></div>
        <div class="fake-section">Sizing <i class="fa-regular fa-plus"></i></div>
        <div class="fake-section">Reviews <i class="fa-regular fa-plus"></i></div>
        <div class="cart">
            <button onclick={() => enshitify()}>Enshitify My Product <i class="fa-solid fa-cart-flatbed"></i></button>
        </div>
    </div>
</section>

<style>
    section {
        position: relative;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4em;

        & :global(img) {
            border-radius: 1rem;
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
        }
    }

    .product-image{
        position: relative;

        &.tint::after {
            position: absolute;
            content: "";
            background-color: var(--product-color);
            inset: 0;
            mix-blend-mode: color;
            border-radius: 1em;
        }
    }

    .price-rating {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & span {
            opacity: 0.5;
        }

        & .price {
            display: flex;
            flex-direction: row;
        }
    }

    h1, h2, h3 {
        line-height: 1;
    }

    h2 {
        margin-top: 0.25em;
        font-weight: normal;
        opacity: 0.5;
    }

    .price-rating {
        margin-top: 1rem;

        & h3 {

            opacity: 0.7;
            &.sale {
                text-decoration: line-through;
            }
        }
    }

    .cart {
        margin-top: 2em;
        display: flex;
        justify-content: flex-end;

        & button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
            border: none;
            padding: 1em 2em;
            width: 50%;
            border-radius: 100px;
            background-color: var(--color-primary);
            color: var(--color-white);
            font-weight: 700;
        }
    }




    h4 {
        line-height: 1;
        margin-block: 0.5rem;
        margin-top: 1rem;
    }

    .color-selector {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        margin-bottom: 2em;

        & > .color-item {
            background-color: var(--item-color);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(0,0,0,0.3);
            opacity: 0.7;

            &:global(.selected) {
                opacity: 1;
            }
        }
    }

    .fake-section {
        font-size: 1.25em;
        padding-block: 1rem;
        border-bottom: 1px solid rgba(0 0 0 / 0.5)
    }
</style>
