<script>
    import ImageCard from "../components/image.svelte";
    import Author from "../components/author.svelte";
    import Cards from "../components/cards.svelte";
</script>
<article class="main-page">
    <div class="mn-pg">
        <section class="image-section">
            <ImageCard />
        </section>
        <section class="author-section">
            <Author />
        </section>
        <section class="cards-section">
            <Cards />
        </section>
    </div>
</article>
<style lang="scss">
    article{
        padding: 10vh 0 10vh 0;
    }
</style>