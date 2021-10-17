<script>
  let connected = false;
  let address = "";

  const connect = () => {
    // TODO
    // if () {}
    cardano.enable()
    .then(r => { if (r) return cardano.getUsedAddresses() })
    .then(a => { address = a[0]; connected = true; })

    cardano.getRewardAddress()
    .then(a => console.log(a))
  }

  const counts = {
    plus : 0,
    ignore : 0,
    fert : 0
  }

</script>


<nav>
  
  <ul class="item-container">

    {#if connected}
      <li>
        <!-- icon here-->
        <span>1</span>
        <span>x</span>
        <span>{counts.plus}</span>
      </li>

      <li>
        <!-- icon here-->
        <span>T</span>
        <span>x</span>
        <span>{counts.ignore}</span>
      </li>

      <li on:click={() => counts.fert++ }>
        <!-- icon here-->
        <span>F</span>
        <span>x</span>
        <span>{counts.fert}</span>
      </li>

    {/if }
  </ul>
  <div class="connector" on:click={connect}>{ connected ? address.substring(0, 6) : "Connect" }</div>
</nav>




<!-- <Navbar color="light" light>
  <div>Items</div>

  { #if connected }

  { address.substring(0, 6) }

  { :else }

    <div class="flex-end connector" on:click={connect}>Connect</div>

  {/if}

</Navbar> -->

<style>

  .item-container {
    flex-grow: 1;
    justify-content: space-around;
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    margin-bottom: 0;
  }

  .connector {
    padding: 0.1em 0.5em;
    background-color: white;
    border-radius: 45%;
  }

  .connector:hover {
    cursor: pointer;
    box-shadow: 0.02em 0.02em 0.1em 0.02em black;
  }

  nav {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 0.3em;
    background: linear-gradient( 323deg, rgb(200 219 248) 0%, rgb(243 254 255) 53%, rgb(255 255 255) 100%);
  }

  li {
    padding: 0.2em;
    cursor: pointer;
  }

</style>
