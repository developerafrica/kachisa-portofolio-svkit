<article class="author">
    <div class="auth">
        <a href="/about" class="card">
            <div class="cd">
                <div class="txt">
                    <h1>EDSON KACHISA</h1>
                    <p>pen artist & drawing instructor</p>
                    <a href="tel://0999791167">HIRE</a>
                </div>
                <div class="img">
                    <img src="/profile.png" alt="edson profile">
                </div>
            </div>
        </a>
    </div>
</article>
<style lang="scss">
    article{
        background: var(--bl-ln);
        border-radius: 3px;
        margin: 2rem 0;
        a{
            display: block;
            padding: 0 1rem;
            .cd{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .txt{
                    
                    h1{
                        @include fnt(var(--wc), 1.4rem, 700);
                        padding: 5px 0;
                    }
                    p{
                        @include fnt(var(--wc), 1.2rem, 650)
                    }
                    a{
                        @include fnt(var(--tc), 1.2rem, 650);
                        padding: 10px;
                        border-radius: 4px;
                        margin: 10px 0;
                        box-shadow: rgba(0, 0, 0, 0.494) 0 4px 4px 0;
                        background: var(--wc);
                        text-align: center;
                    }
                }
                .img{
                    img{
                        width: 100px;
                    }
                }
            }
        }
    }
</style>