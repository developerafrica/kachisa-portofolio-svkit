<script>
    import ImageCard from "../components/image.svelte";
    import Author from "../components/author.svelte";
    import Cards from "../components/cards.svelte";
    import {stores} from "../stores/stores.js"

    
</script>
<article class="main-page">
    <div class="mn-pg">
        <div class="landing">        

            <section class="image-section">
                <ImageCard />
            </section>
            <section class="author-section">
                <Author />
            </section>
        </div>
        <section class="cards-section">
            <article class="cards">
                <div class="crds">
                    <header>
                        <h1>LATEST WORK</h1>
                    </header>
                    <main>
                        <div class="mn">
                            {#each $stores.data.splice(0,4) as cdt}
                                <Cards  id={cdt.id} text={cdt.text} image={cdt.image} price={cdt.price} size={cdt.size}/>                            
                            {/each}
                        </div>
                    </main>
                    <footer>
                        <a href="/gallery">
                            EXPLORE GALLERY &rarr;
                        </a>
                    </footer>
                </div>
            </article>
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
                <p><a href="tel://0880164455">
                    <span>powered by</span><span><img src="/logo.png" alt="logo"></span><span>DEVELOPER AFRICA MW</span>                
                </a></p>
      
              </article>
            </div>
        </footer>
    </div>
</article>
<style lang="scss">
    article{
        .landing{
            padding: 10vh 0 0 0;
            min-height: 100vh;
            position: relative;
            .author-section{
                padding: 15vh 20px 0 20px;
            }
           
        }
        .cards-section{
            article{
                header{
                    padding: 1rem;
                    text-align: end;
                    h1{
                        @include fnt(var(--tc), 1.3rem, 600)
                    }
                }
                footer{
                    padding: 10px;
                    a{
                        display: block;
                        padding: 15px;
                        background: var(--bl-ln);
                        border-radius: 5px;
                        @include fnt(var(--wc), 1.3rem, 600);
                    }
                }
            }
        }
        footer{
            background: var(--wc);
            padding: 2rem 0 10vh 0;
            header{
                text-align: center;
                h1{
                    @include fnt(var(--tc), 1.5rem, 800);
                    letter-spacing: 1.3px;
                }
            }
            article{
                text-align: center;
                padding: 10vh 0;
                h1{
                    @include fnt(var(--tc), 1.2rem, 600);
                    a{
                        @include fnt(var(--bl), 1.2rem, 700);
                        
                    }

                }
                p{
                    padding:20px;
                    a{
                        @include fnt(var(--bl), 2.5rem, 700);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 25px;
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
</style>