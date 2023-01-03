<article class="deva">
    <div class="art-dev">
        <div class="text">
            <h2>DEVELOPER AFRICA MW</h2>
            <hr>
            <h1><a href="https://developerafricamw.netlify.app">developerafrica.mw</a></h1>
            <h1><a href="mail://developerafricamw@gmail.com">developerafricamw@gmail.com</a></h1>
            <h1><a href="tel://0880164455">0880164455</a></h1>
        </div>
        <div class="image">
            <img src="/logo.png" alt="logo">
        </div>
    </div>
</article>
<style lang="scss">
    article{
        padding:20px;
        box-shadow: rgba(0, 0, 0, 0.157) 0 1px 4px 1px;
        background: var(--wc);
        .art-dev{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .text{
                h2{
                    @include fnt(rgba(0, 0, 0, 0.846), 1.4rem, 800);
                    letter-spacing: 1.3px;
                    
                }
                h1{
                    text-align: start;
                    margin: 15px 5px;
                    a{
                        @include fnt(var(--bl), 1.3rem, 500);
                    }

                }

            }
            .image{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>