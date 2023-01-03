<script>
    import {stores} from "../../stores/stores"
    console.log($stores.AFI)

</script>
<article class="afi">
    <div class="art-afi">
        
        <header>
            <img src="/afi.jpg" alt="">
            <h1>ART FOR IMPACT MALAWI</h1>
        </header>
        <main>
            {#each $stores.AFI as txt}
            <p>{txt.introduction}</p>
            <h1>purpose</h1>
            <br>
            {#each txt.purpose as tp}
            <p>{tp}</p>
            <br>
            {/each}
            <h1>activities</h1>
            <br>
            {#each txt.activities as tp}
            <p>{tp}</p>
            <br>
            {/each}
        
            {/each}            
        </main>
        <footer>
            <a href="tel://0999791167">join the initiative</a>
        </footer>
    </div>
</article>
<style lang="scss">
    article{
        padding: 10vh 0;
        .art-afi{
            header{
                h1{
                    @include fnt(var(--tc), 1.4rem, 550);
                    padding: 15px 10px;
                }
                img{
                    width: 100%;
                }
            }
            main{
                padding: 15px;
                h1{

                    @include fnt(var(--tc), 1.4rem, 550);
                    text-align: end;
                    text-transform: uppercase;
                    padding-right: 10px;
                    border-right: black solid 2px;
                    line-height: 4;
                }
                p{

                    @include fnt(var(--tc), 1.3rem, 550);
                    line-height: 2;
                }

            }
            footer{
                padding: 10vh 0;
                a{
                    text-transform: uppercase;
                    text-align: center;
                    display: block;
                    padding: 15px 10px;
                    background: goldenrod;
                    @include fnt(var(--tc), 1.4rem, 500)
                }
            }
        }
    }
</style>