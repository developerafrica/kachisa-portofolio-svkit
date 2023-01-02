<script>
    import {stores} from "../../stores/stores"
    console.log($stores.data)
    import Cards from "../../components/cards.svelte"
</script>
<article class="gallery">
    <div class="art-">
        <header></header>
        <main>
            <div class="mn">
                {#each $stores.data as cdt }
                    <Cards id={cdt.id} text={cdt.text} image={cdt.image} price={cdt.price} size={cdt.size}/>
                {/each}
            </div>
        </main>
        <footer></footer>
    </div>
</article>
<style>
    .gallery{
        padding: 10vh 0;
    }
</style>