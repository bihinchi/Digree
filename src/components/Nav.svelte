<script>
  import Fertilizer from "../assets/fertilizer.svg";
  import Shovel from "../assets/shovel.svg";
  import Clover from "../assets/clover.svg";

  
  import { draw } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let connected = true;
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
  
  {#if connected}
    <ul transition:draw="{{delay: 250, duration: 1200, }}" 
      class="item-container">



    { #each Object.entries(counts) as [key, value] }
      <li on:click={() => counts[key]++} transition:draw="{{delay: 250, duration: 1200, }}">
        
        { #if key == "fert"}
          <Fertilizer />
        { :else if key == "plus"}
          <Shovel/>
        {:else}
          <Clover/>
        {/if}
        <span>x</span>
        <span>{value}</span>
      </li>
    {/each}

    </ul>
  {/if }
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
    background: linear-gradient( 14deg, #8ac396 0%, #b78ac3 100%);
    border-bottom: 1px solid #618869;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;

  }

  li {
    padding: 0.2em;
    display: flex;
    gap: 0.2em
  }

  
  li:hover {
    cursor: pointer;
  }

  :global(li > svg) {
    height: 100%;
  }

  :global(li > svg:hover) {
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.2em #888);
  }

</style>
