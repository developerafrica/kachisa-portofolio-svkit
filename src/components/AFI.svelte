<article class="af">
    <div class="art-afi">
        <div class="image"><img src="/afi.jpg" alt="artforimpact"></div>
        <div class="text">
            <h1>art for IMPACT</h1>
            <p>An initiative by <a href="/about">EDSON KACHISA</a> to commit part of the earnings from <a href="/gallery">THE ART</a> to help in envirnomental sustanability and conservation, development of rural livelyhoods and assist in quality education developement in rural areas on malawi</p>
        </div>
    
        <div class="link">
            <a href="/afi">tell me more &rarr;</a>
        </div>
    </div>
</article>
<style lang="scss">
    article{
        .art-afi{
            background: goldenrod;
            max-width: 355px;
            .image{
                max-width: 355px;
                img{
                    width: 100%
                }
            }
            .text{
                padding: 10px;
                h1{
                    @include fnt(var(--tc), 1.7rem, 650);
                    text-transform: uppercase;
                    padding: 10px 0;
                    letter-spacing: 2px;
                }
                p{
                    @include fnt(var(--tc), 1.3rem, 600);
                    line-height: 2;
                    padding:10px;
                    a{
                        @include fnt(var(--bl), 1.4rem, 650);
                        letter-spacing: 1.6px;

                    }
                }
            }
            .link{
                padding: 10px;
                a{
                    display: block;
                    padding: 10px;
                    background: black;
                    @include fnt(var(--wc), 1.3rem, 550);
                }
            }
        }
    }
</style>