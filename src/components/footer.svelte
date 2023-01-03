<script>
    $:active = false
</script>
<article class="footer">
    <div class="art-ft">
        <button class:active={active} class="accordion" on:click={()=>{active = !active}}>contact</button>
        
    </div>
</article>
<style>
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
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
    }
    button.accordion.active, button.accordion:hover {
        background-color: #ddd;
    }

    
</style>