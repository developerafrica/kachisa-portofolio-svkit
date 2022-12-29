<article class="author">
    <div class="auth">
        <a href="/about" class="card">
            <div class="cd">
                <div class="txt">
                    <div class="txt-tx">
                        <h1>EDSON KACHISA</h1>
                        <p>pen artist & drawing instructor</p>
                        <a href="tel://0999791167">HIRE</a>
                    </div>
                    <div class="txt-bg"></div>

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
        margin: 10vh 0 0 0;
        a{
            display: block;
            .cd{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .txt{
                    flex: 1;
                    position: relative;
                    .txt-bg{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top:0;
                        left: 0;
                        mask-image: linear-gradient(to right,black, transparent); 
                        -webkit-mask-image: linear-gradient(to right, black, transparent);
                        background-image: url('/patternpad.svg');  
                    } 
                    .txt-tx{
                        padding: 0 1rem;
                        position: relative; 
                        left:0;
                        z-index: 9;
                        width: 100%;
                        height: 100%;
                    }
                                
                   
                    h1{

                        @include fnt(var(--tc), 1.4rem, 800);
                        padding: 10px 0;
                        letter-spacing: 2px;

                    }
                    p{
                        @include fnt(var(--tc), 1.3rem, 700)
                    }
                    a{
                        @include fnt(var(--tc), 1.3rem, 750);
                        padding: 10px;
                        border-radius: 4px;
                        margin: 10px 0;
                        box-shadow: rgba(0, 0, 0, 0.494) 0 4px 4px 0;
                        background: var(--wc);
                        text-align: center;
                        z-index: 10;
                    }
                }
                .img{
                    img{
                        width: 110px;
                    }
                }
            }
        }
    }
</style>