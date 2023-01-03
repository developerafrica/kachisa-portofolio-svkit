<script>
  import "../app.scss";
  $: menu = false
</script>
<article class="layout">
  <div class="ly-out">
    <header>
      <nav>
        <ul>
          <li><button on:click={()=>{menu = !menu}} ><div></div><div></div></button><a href="/">KACHISA</a></li>
          <li><a href="/cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18C4 20.2105 5.78947 22 8 22H16C18.2105 22 20 20.2105 20 18V10C20 7.78947 18.2105 6 16 6H8C5.78947 6 4 7.78947 4 10V18ZM6 18V10C6 8.77193 6.77193 8 8 8H16C17.2281 8 18 8.77193 18 10V18C18 19.2281 17.2281 20 16 20H8C6.77193 20 6 19.2281 6 18ZM10 9V6C10 4.77193 10.7719 4 12 4C13.2281 4 14 4.77193 14 6V9C14 9.54386 14.4561 10 15 10C15.5439 10 16 9.54386 16 9V6C16 3.78947 14.2105 2 12 2C9.78947 2 8 3.78947 8 6V9C8 9.54386 8.45614 10 9 10C9.54386 10 10 9.54386 10 9Z" fill="black"/>
              </svg>
              
          </a></li>
        </ul>
      </nav>
    </header>
    <article class:clip={menu}>
      <nav>
        <ul>
          <li><a on:click={()=>{menu = !menu}} href="/">home</a></li>
          <li><a on:click={()=>{menu = !menu}} href="/about">biography</a></li>
          <li><a on:click={()=>{menu = !menu}} href="/gallery">gallery</a></li>
          <li><a on:click={()=>{menu = !menu}} href="/afi">art for impact &rarr;</a></li>
          <li><a on:click={()=>{menu = !menu}} href="/contact">contact</a></li>
        </ul>
      </nav>
    </article>
    <main>
      <div class="mn">
        <slot />
      </div>
    </main>

  </div>
</article>
<svelte:head>
  <meta name="theme-color" content="#fff">
</svelte:head>
<style lang="scss">
  :global(body){
    background: var(--bg);
  }
  .clip{
    clip-path: circle(1500px);
    -webkit-clip-path: circle(1500px);
    pointer-events: all;
    transition: 2s all ease-in ;

  }
  article{
    padding: 10px;
    header{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      background: var(--wc);
      z-index: 10;
      nav{
        padding: 1.5rem;
        ul{
          display: flex;
          align-items: center;
          justify-content: space-between;
          button{
            border: none;
            background: none;
            margin: 0 2rem 0 0 ;
            div{
              background: var(--tc);
              height: 3px;
              width: 25px;
              border-radius: 4rem;
            }
            div:nth-child(2){
              margin: 8px 0 0 0;
              width: 18px;
            }
           
          }
          a{
            @include fnt(var(--tc), 1.4rem, 650);
            letter-spacing: 1.2px;
          }
  
        }
  
      }
    }
    article{
      background:white    ;
      height: 100vh;
      width: 100%;
      position: fixed;
      z-index: 9;
      left: 0;
      top: 0;
      display:grid;
      place-items: center;
      clip-path: circle(0);
      -webkit-clip-path: circle(0);
      pointer-events: none;
      transition: 2s all ease-in-out ;
      nav{
        width: 100%;
        ul{
          li:nth-child(4){
            background: goldenrod;
            border-radius: 5px;
            text-transform: uppercase;
          }
          li{
            margin: 20px 0;
            a{
              display: block;
              text-transform: uppercase;
              padding: 15px;
              @include fnt(var(--tc), 1.4rem, 600);
            }
          }
        }
      }
    }
    
  }
</style>
