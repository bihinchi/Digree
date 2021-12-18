<script>
  import Fertilizer from "/static/assets/fertilizer.svg";
  import Shovel from "/static/assets/shovel.svg";
  import Clover from "/static/assets/clover.svg";

  import ItemDrop from "/src/components/ItemDrop.svelte";
  import MenuDrop from "/src/components/MenuDrop.svelte";
  
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import { page } from '$app/stores';

	import { web3 } from "../js/stores";
  import { onMount } from "svelte";

  

  let connected = false;
  let address = "123456";


  const connect = () => {
    // TODO
    // if () {}
    cardano.enable()
    .then(r => { if (r) return cardano.getUsedAddresses() })
    .then(a => { 
      address = a[0]; 
      connected = true; 
      web3.connected = true;
      localStorage.setItem('connected', 'true');
    })
  }

  onMount(() => {
    connected = localStorage.getItem('connected') == "true";
    if (connected) connect();
  })

  const counts = {
    plus : {
      count: 0,
      price: 5,
      text: "Extra shovel let you ignore the time limit and start digging sooner",
      name: "Shovel"
    },
    ignore : {
      count: 0,
      price: 10,
      text: "Increases your luck and the  probability to find something valuable",
      name: "Clover"
    },
    fert : {
      count: 0,
      price: 8,
      text: "Speed up the growing process and let you dig a recovering hole earlier",
      name: "Fertilizer"
    },
  }


</script>



<nav class="mb-xs-2 mb-md-4">

  <div class="d-flex w-100 { connected ? "" : "justify-content-end"}">
    {#if connected  }

      <ul in:fly="{{delay: 250, duration: 1200, }}" 
        class="item-container" class:nothome={$page.path !== '/'}>

        { #if $page.path == '/'} 

          { #each Object.entries(counts) as [key, value] }
      
            <li dropdown-toggle id="dropdownMenuButton-{key}" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              
              { #if key == "fert"}
                <Fertilizer />
              { :else if key == "plus"}
                <Shovel/>
              {:else}
                <Clover/>
              {/if}
              <span>x</span>
              <span>{value.count}</span>
            </li>
      
            <ItemDrop bind:count={counts[key].count} labelled={"dropdownMenuButton-" + key } {...value} />
      
          {/each}
        
        { :else }
            <li><a href="/">Home</a></li>
        { /if }
  
  
      </ul>

      <div class="connector account" dropdown-toggle id="account-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        {address.substring(0, 2) + ".." + address.substring(address.length-2, address.length)}
      </div>

      <MenuDrop />
      
      { :else }
      
        <div class="connector" on:click={connect}>Connect</div>


    {/if }

  </div>
  


</nav>


<style>

  .item-container {
    flex-grow: 1;
    justify-content: space-around;
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    margin-bottom: 0;
    height: 2em;
  }

  .connector {
    margin: 0 0.2em;
    padding: 0.2em 0.45em;
    display: flex;
    align-items: center;
  }

  .connector:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .account {
    filter: drop-shadow(0 0 0.1em #888);
  }

  nav {
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 0.3em;
    background: linear-gradient( 14deg, #8ac396 0%, #b78ac3 100%);
    border-bottom: 0.5px solid #618869;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
  }

  li {
    padding: 0.2em;
    display: flex;
    gap: 0.2em;
    max-width: 25%;
    justify-content: center;
  }

  
  li:hover {
    cursor: pointer;
  }

  .nothome {
    padding-inline-start: 5%;
    justify-content: start;
  }

  :global(li > svg) {
    height: 100%;
  }

  :global(li > svg:hover) {
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.1em #888);
  }


  nav {
      z-index: 1;
  }

  a {
    color: black;
    filter: drop-shadow(0 0 0.1em #888);
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

</style>
