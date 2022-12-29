<script>
    const data = [
        {
            name :'art2.webp',
            display:'girl with a dog',
            price: 'k400 000 '
        },
        {
            name :'art2.webp',
            display:'girl with a dog',
            price: 'k400 000 '
        },
        {
            name :'art2.webp',
            display:'girl with a dog',
            price: 'k400 000 '
        },
       
    ]
</script>
<article class="cards">
    <div class="crds">
        <header>
            <h1>LATEST WORK</h1>
        </header>
        <main>
            <div class="mn">
                {#each data as cdt}
                <div class="card">
                    <div class="cd">
                        <div class="txt">
                            <h1>
                                {cdt.display}
                            </h1>
                        </div>
                        <div class="img">
                            <img src={cdt.name} alt="artwork" >
                        </div>
                        <div class="end">
                            <h1>
                                {cdt.price}
                            </h1>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </main>
    </div>
</article>
<style lang="scss">
    article{
        header{
            padding: 1rem;
            text-align: end;
            h1{
                @include fnt(var(--tc), 1.3rem, 600)
            }
        }
        main{
            .mn{
                .card{
                    margin: 2rem 0;
                    box-shadow: rgba(0, 0, 0, 0.098) 0 4px 4px 6px;
                    border-radius: 4px;
                    .cd{
                        padding: 1rem;
                        .end{
                            text-align: end;
                            h1{

                                @include fnt(var(--bl), 1.3rem, 600);
                                border-right: black solid 1px;
                                padding: 0.8rem;
                                border-radius: 1px;
                            }
                        }
                        .txt{
                            padding: 2rem;
                            h1{
                                display: inline;
                                @include fnt(var(--tc), 1.13rem, 550);
                                background: var(--wc);
                                border: black solid 0.9px;
                                border-radius: 5px;
                                text-transform: uppercase;
                                padding: 1rem;
                                // box-shadow: rgba(0, 0, 0, 0.412) 0 4px 4px 0;

                            }

                        }
                        .img{
                            width: 250px;
                            margin: 0 auto;
                            img{
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>