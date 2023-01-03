<script>
    /**
     * @type {any}
     */
     export let id
    /**
     * @type {any}
     */
     export let text
     /**
     * @type {any}
     */
      export let image
     /**
     * @type {any}
     */
      export let price
     /**
     * @type {any}
     */
      export let size
</script>

<div id="card">
    <div class="cd">
        <div class="txt">
            <h1>
                {text}
            </h1>
        </div>
        <div class="img">
            <img src={image} alt="artwork" >
        </div>
        <div class="end">
            <div class="link">
                <a href="/slug/{id}">
                    <span>
                        <span>more</span><span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/></g></g></svg>
                        </span>
                    </span>
                </a>
            </div>
            <div class="details">

                <h1>
                    {price}
                </h1>
                <h2>
                    {size} cm
                </h2>
            </div>
        </div>
    </div>
</div>
<style lang="scss">
    #card{
        margin: 2rem 0;
        box-shadow: rgba(0, 0, 0, 0.098) 0 4px 4px 6px;
        border-radius: 4px;
        background: var(--wc);
        .cd{
            padding: 1rem;
            .end{
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .link{
                   
                    a{
                        display: block;
                        background:  #1065963c;
                        box-shadow: rgba(0, 0, 0, 0.198) 0 4px 4px 1px;
                        padding: 10px;
                        border-radius: 5px;
                        span{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            span:nth-child(1){
                                @include fnt(var(--tc), 1.5rem, 550);
                            }
                            svg{
                                width: 18px;
                            }
                        }
                    }
                }
                .details{
                    display: flex;
                    align-items: center;
                    text-align: end;
                }
                h1{
    
                    @include fnt(var(--bl), 1.3rem, 550);
                    border-right: black solid 1px;
                    padding: 0.8rem;
                    border-radius: 1px;
                }
                h2{
    
                    @include fnt(var(--bl), 1.3rem, 520);
                  
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

</style>