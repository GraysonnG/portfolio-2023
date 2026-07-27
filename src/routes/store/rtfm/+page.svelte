<script lang="ts">
	import Image from "../../../components/Image.svelte";


    const colors: Record<string, string> = {
      "Navy":"#01295F;",
      "Ocean Blue":"#437F97;",
      "Olive":"#849324;",
      "Yellow":"#FFB30F;",
      "Rosey Cheeks":"#FD151B;"
    }

    let selectedColor = $state("Navy")

    function selectColor(index: number) {
      selectedColor = Object.keys(colors)[index];
      const elements = document.querySelectorAll(".color-item");
      elements.forEach(element => {
        element.classList.remove("selected");
      })

      elements[index].classList.add("selected")
    }
</script>

<section class="container">
    <div class="product-image" style="--product-color: {colors[selectedColor]};">
        <Image src="/book.jpg" />
    </div>
    <div class="product-menu">
        <h1>RTFM - Hard Cover</h1>
        <h2>For when you don't follow the instructions.</h2>
        <div class="price-rating">
            <div class="price"><h3>Free&nbsp;</h3><h3 class="sale">$Priceless</h3></div>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(1337)</span>
            </div>
        </div>
        <h4>Selected Color: {selectedColor}</h4>
        <div class="color-selector">
            <button title="" onclick={() => { selectColor(0) }} class="color-item selected" id="color-1" style="--item-color: #01295F;"></button>
            <button title="" onclick={() => { selectColor(1) }} class="color-item" id="color-2" style="--item-color: #437F97;"></button>
            <button title="" onclick={() => { selectColor(2) }} class="color-item" id="color-3" style="--item-color: #849324;"></button>
            <button title="" onclick={() => { selectColor(3) }} class="color-item" id="color-4" style="--item-color: #FFB30F;"></button>
            <button title="" onclick={() => { selectColor(4) }} class="color-item" id="color-5" style="--item-color: #FD151B;"></button>
        </div>

        <div class="fake-section">Details <i class="fa-regular fa-plus"></i></div>
        <div class="fake-section">Sizing <i class="fa-regular fa-plus"></i></div>
        <div class="fake-section">Reviews <i class="fa-regular fa-plus"></i></div>
        <div class="cart">
            <button>Purchase Now <i class="fa-solid fa-cart-flatbed"></i></button>
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

        &::after {
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
