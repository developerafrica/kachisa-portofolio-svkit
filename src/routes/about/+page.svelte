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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam exercitationem maiores harum culpa corporis tempore quo porro eius. Fugit vel minima quos, reprehenderit voluptates sunt quaerat hic! Fugit aliquam molestiae velit enim, minima, fugiat architecto reprehenderit aut esse dicta doloremque delectus eius? Impedit et, adipisci consequatur odit rerum dolorem!</p>
                <div class="image">
                    <img src="/bio.png" alt="biography">
                </div>
                <hr>
                <h1>ARTIST STATEMENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit laboriosam, expedita alias impedit quibusdam quo illo modi nam culpa optio assumenda ratione ipsam eligendi harum ullam atque autem quas aspernatur error numquam laudantium, deleniti officia. Ipsam non rerum nesciunt obcaecati facere nobis similique tenetur? Porro ea quibusdam et! Dolore, facere soluta hic reprehenderit accusamus rerum magni. Natus atque aut praesentium! Doloribus, totam delectus nostrum cupiditate temporibus culpa? Atque voluptatem dicta quasi. Libero officiis expedita officia id eaque exercitationem porro enim. Consectetur dolorum consequuntur in mollitia voluptate dicta ipsum dignissimos temporibus rerum delectus aut autem at nesciunt, aliquam libero velit.</p>
                <Author />
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
                    @include fnt(var(--bl), 1.4rem, 600);
                    padding: 10px 0;
                }
                padding: 10px;
                .image{
                    border: red solid 1px;
                    img{
                        width: 100%;
                    }
                }

            }
        }
    }
</style>