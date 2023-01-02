<script>
    import { onDestroy, onMount, tick } from 'svelte';
    let delay = 3000;
    let images = [
        {
            src: '/art.webp',
            alt: 'artwork'
        },
        {
            src: '/art2.webp',
            alt: 'artwork'
        },
    ];
    let currentIndex = 0;
    /**
     * @type {string | number | NodeJS.Timer | undefined}
     */
    let interval;
    async function startAutoplay() {
        interval = setInterval(function() {
            currentIndex++;
            if (currentIndex >= images.length) {
            currentIndex = 0;
            }
            tick();
        }, delay);
    }
    $: onMount(startAutoplay);
    function stopAutoplay() {
        clearInterval(interval);
    }
    $: onDestroy(stopAutoplay);
</script>

<div id="carouselContainer">
    <ul id="carousel">
      {#each images as image}
        <li style="display: {currentIndex === images.indexOf(image) ? 'block' : 'none'}">
          <img src="{image.src}" alt="{image.alt}" >
        </li>
      {/each}
    </ul>
  </div>

  <style>
    #carouselContainer {
      position: relative;
      width: 800px;
      height: 400px;
      overflow: hidden;
    }
  
    #carousel {
      position: absolute;
      top: 0;
      left: 0;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    #carousel li {
      width: 800px;
      height: 400px;
      float: left;
    }
  
    #carousel img {
      width: 100%;
      height: 100%;
    }
  </style>