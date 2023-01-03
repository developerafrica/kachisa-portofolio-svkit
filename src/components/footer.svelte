<script>
    $:active = true
</script>
<article class="footer">
    <div class="art-ft">
        <button class:active={active} class="accordion" on:click={()=>{active = !active}}>CONTACT</button>
        {#if active}

        <div class="contact">
            <ul>
                <li><a href="mail://edsonkachisa@yahoo.com">edsonkachisa@yahoo.com</a></li>
                <li><a href="tel://0999791167">+265 999791167</a></li>
            </ul>
            <ul>
                <h1>SOCIALS</h1>
                <li><a href="https://facebook">facebook</a></li>
                <li><a href="https://twitter">twitter</a></li>
                <li><a href="tel://0880164455">whatsapp</a></li>
            </ul>
        </div>
        {/if}
    </div>
</article>
<style lang="scss">
    .contact{
        padding: 10px;
        ul:nth-child(2){
            text-align: end;
        }
        ul{
            padding: 0;
            h1{
                @include fnt(var(--tc), 1.3rem, 500);
                border-right: black solid 1px;
                padding: 10px;
                
            }
            li{
                padding: 10px 5px;
            }
            a{
                @include fnt(var(--bl), 1.4rem, 500);
                display: block;
            }
        }
    }
    button.accordion:after {
    content: '\02795'; /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: #777;
    float: right;
    margin-left: 5px;
    }

    button.accordion.active:after {
        content: "\2796"; /* Unicode character for "minus" sign (-) */
    }
    button.accordion {
        background-color: #eee;
        color: #444;
        @include fnt(var(--tc), 1.3rem, 500);
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
        margin-top: 20px;
    }
    button.accordion.active, button.accordion:hover {
        background-color: #ddd;
    }

    
</style>