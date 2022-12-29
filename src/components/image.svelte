<article class="image">
    <div class="img">
        <img src="/art.webp" alt="artwork">
        <div class="mask">
            <h1>ART</h1>
        </div>
        <hr>
        <p>edson art kachisa </p>
    </div>
</article>
<style lang="scss">
    article{

        .img{
            width: 350px;
            margin: 0 auto;
            position: relative;
            img{
                width: 100%;
                mask-image: linear-gradient(black, transparent); 
                -webkit-mask-image: linear-gradient(white, transparent); 
            }
            p{
                @include fnt(var(--tc), 1.1rem, 700);
                text-align: center;
                letter-spacing: 2.3px;
                font-family: monospace;
                text-transform: uppercase;
                
            }
            .mask{
                text-align: center;
                position: absolute;
                bottom: 0;
                width: 100%;
                h1{
                    letter-spacing:5px;
                    background:  url('/art.webp') ;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: bottom;
                    background-color: #0000009d;
                    background-blend-mode: multiply;
                    color: transparent;
                    background-clip: text;                    
                    -moz-background-clip: text;                    
                    -webkit-background-clip: text; 
                                       
                    font-size: 100px;
                    animation: bg-anime 25s cubic-bezier(0.3, 0, 0.7, 1) infinite;
                    @keyframes bg-anime{
                        0%{background-position: 70% 70%;}
                        50%{background-position: 100% 100%;}
                        100%{background-position: 70% 70%;}
                    }
                   
                }
            }

        }
    }
</style>