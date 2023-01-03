<script>
    import Author from "../../components/author.svelte"
</script>
<article class="about">
    <div class="art-abt">
        <header>
            <div class="hd">
                <h1>EDSON ART KACHISA</h1>
                <p>pen artist</p>
            </div>
        </header>
        <main>
            <div class="mn">
                <h1>ABOUT ARTIST</h1>
                <p>Edison Kachisa is a self taught artist. Edison and his sibblings were insipired at an early age by their uncle Davie Naluso who is a very talented painter. As he grew older, Drawing developed, became a passion and a form of therapy</p>
                <div class="image">
                    <img src="/bio.png" alt="biography">
                </div>
                <br>
                <h1>BIO</h1>
                <p>He draws usually using blue pens although he is learning how to use multicoloured pens and acrylic paints. Edison enjoys drawing local Malawian people. He views his art as a form of communication and story telling and strives in most of his themes to portray his society's identity,efforts and pride. His passion for his society has led him to found an initiative he named Art for Impact Mw to which he is deeply committed to. Edison's part of earnings through art sponsor the activities of his initiative which he believes will help his society in elevating rural livelihoods, support needy leaners in primary schools in rural areas, reafforestation and soil conservation.</p>
                
                <Author />
                <br>
                <br>
                <h1>___</h1>
                <p>
                    Edison exhibited his artworks at the Art in the park (AITP)  11-13 November 2022 Exhibition. He received positive feedback and encouragement from art viewers and fellow artists as well including the legendary Malawian  artist Jimmy Malinga and Icon Malawian Batik artist Peter Chikondi. 
                </p>
                <br>
                <p>
                    Edison, his fellow artists and friends organised an art exhibition at their university campus at Lilongwe university of agriculture and Natural resources. The exhibition took place on 5 March 2022 at Bunda campus in attendance were students, members of staff including the vice Chancellor and the guest of honour was Dr Micheal Using the minister of tourism culture and wildlife. The guests and students that visited the event were all impressed with the artworks Edison and his fellow artists displayed. 
                </p>
            </div>
        </main>
        <foot></foot>
    </div>
</article>
<style lang="scss">
    article{
        padding: 10vh 0;
        header{
            padding: 10px;
            h1{
                @include fnt(var(--tc), 1.4rem, 600)
            }
            p{
                @include fnt(var(--bl), 1.4rem, 600);
                padding: 10px 0;
            }
        }
        main{
            .mn{
                h1{
                    @include fnt(var(--tc), 1.4rem, 600);
                    text-align: end;
                    border-right: black solid 1px;

                    padding: 10px;
                }
                p{
                    @include fnt(var(--tc), 1.4rem, 600);
                    padding: 10px 0;
                    line-height: 2;
                }
                padding: 10px;
                .image{
                    img{
                        width: 100%;
                    }
                }

            }
        }
    }
</style>