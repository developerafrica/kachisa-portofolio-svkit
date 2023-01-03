<script>
    
    import { onDestroy, onMount, tick } from 'svelte';
    let images = [
        {
            id: crypto.randomUUID(),
            src: '/art2.png',
            alt: 'artwork',
            text: 'edson'
        },
        {
            id: crypto.randomUUID(),
            src: '/art1.png',
            alt: 'artwork',
            text: 'art'
        },
        {
            id: crypto.randomUUID(),
            src: '/art9.png',
            alt: 'artwork',
            text: 'kachsa'
        }
    ];
    let currentIndex = 0;
    let delay = 2000;
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
<article  class="image">
    {#each images as image}
    <div 
        class="img" style="display: {currentIndex === images.indexOf(image) ? 'block' : 'none'}">
        <img src="{image.src}" alt="{image.alt}" >
        <div class="mask">
            <h1 style='background-image:url("./{image.src}")'>{image.text}</h1>
        </div>
       
    </div>
    {/each}
</article>
<style lang="scss">
    article{
        position: relative;
        overflow: hidden;        
        .img{
            width: 250px;
            margin: 0 auto;
            position: relative;
            
            img{
                width: 100%;
                mask-image: linear-gradient(black, transparent); 
                -webkit-mask-image: linear-gradient(black, transparent); 
                
            }
            
            .mask{
                text-align: center;
                position: absolute;
                bottom: 0;
                width: 100%;
                h1{
                    letter-spacing:5px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    text-transform: uppercase;
                    background-position: bottom;
                    // background-color: #0000009d;
                    // background-blend-mode: multiply;
                
                    background-clip: text;                    
                    -moz-background-clip: text;                    
                    -webkit-background-clip: text; 
                    @include fnt(rgba(0, 0, 0, 0.053), 60px, 800);  
                    
                    animation: bg-anime 10s cubic-bezier(0.3, 0, 0.7, 1) infinite;
                    @keyframes bg-anime{
                        0%{background-position: 70% 70%;}
                        50%{background-position: 100% 100%;}
                        100%{background-position: 70% 70%;}
                    }
                   
                }
            }

        }
    }
</style>