<article class="cards">
    <div class="crds">
        <header>
            <h1>LATEST WORK</h1>
        </header>
        <main>
            <div class="mn">
                <div class="card">
                    <div class="cd">
                        <div class="img">
                            <img src="/art2.webp" alt="artwork" >
                        </div>
                        <div class="txt"></div>
                    </div>
                </div>
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
                    .cd{
                        padding: 1rem;
                        .img{
                            width: 300px;
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