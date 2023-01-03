<script>
    import ImageCard from "../components/image.svelte";
    import Author from "../components/author.svelte";
    import Cards from "../components/cards.svelte";
    import Developerafricamw from "../components/devafrica.svelte";
    import AFI from "../components/AFI.svelte"
    import Footer from "../components/footer.svelte"
    import {stores} from "../stores/stores.js"

    $: store  = $stores
   

    
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
                            {#each store.dataSplice as cdt}
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
        <hr>
        <section class="afi-section">
            <div class="afi-sect">
                <header>
                    <h1>INITIATIVES</h1>
                </header>
                <main>
                    <AFI />
                </main>
            </div>
        </section>
        <footer>
            <div class="ft">
              <header>
                <h1>KACHISA EDSON ART</h1>
              </header>
              <main>
                <Footer />      
              </main>
            
              <article class="author">
                <h1>created with 🖤 by <a href="https://github.com/developerafrica/"> BUTAO PETER | DEVELOPER AFRICA MW</a></h1>
                <div class="devafrica-card">

                    <Developerafricamw />
                </div>
      
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
            padding: 0 0 20px 0;
            article{
                header{
                    padding: 1rem;
                    text-align: end;
                    h1{
                        @include fnt(var(--tc), 1.3rem, 600)
                    }
                }
                footer{
                    padding: 30px 10px;
                    a{
                        display: block;
                        padding: 15px;
                        background: var(--btn-ln);
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                        @include fnt(var(--wc), 1.3rem, 600);
                    }
                }
            }
        }
        .afi-section{
            padding: 10px 0;
            .afi-sect{
                header{
                    padding: 1rem;
                    text-align: end;
                    h1{
                        @include fnt(var(--tc), 1.3rem, 600)
                    }
                }
                main{
                    padding: 40px 0;
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
                background: rgba(128, 128, 128, 0.183);
                h1{
                    @include fnt(var(--tc), 1.2rem, 600);
                    a{
                        @include fnt(var(--bl), 1.2rem, 700);
                        
                    }

                }
                .devafrica-card{
                    padding: 5vh 10px;
                }
            }
        }
    }
</style>