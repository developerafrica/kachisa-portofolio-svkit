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
        <footer>
            <div class="ft">
              <header>
                <h1>KACHISA EDSON ART</h1>
              </header>
              <main>
      
              </main>
              <article class="author">
                <h1>created with 🖤 by <a href="https://github.com/developerafrica/"> BUTAO PETER | DEVELOPER AFRICA MW</a></h1>
      
              </article>
            </div>
        </footer>
    </div>
</article>
<style lang="scss">
    article{
        padding: 10vh 0 10vh 0;
        footer{
            background: var(--wc);
            padding: 2rem 0 0 0;
            header{
                text-align: center;
                h1{
                    @include fnt(var(--tc), 1.5rem, 800);
                    letter-spacing: 1.3px;
                }
            }
            article{
                text-align: center;
                h1{
                    @include fnt(var(--tc), 1.2rem, 600);
                    a{
                        @include fnt(var(--bl), 1.2rem, 700);
                        
                    }

                }
            }
        }
    }
</style>