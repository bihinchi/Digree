<script>    
    import Digree from "./Digree.svelte";



    let nfts = [101];
    let angle = 181;

</script>



<article class="container">
    <div class="row justify-content-around p-1 py-2">

        { #if nfts.length > 0}

            <div class="mt-2 col-xs-10 col-sm-3 d-flex justify-content-center align-items-start">
                <div class="nums rounded p-1">
                    { #each nfts as nft }
                        <div class="m-1 rounded nft px-1 ib" 
                        on:click={()=>angle=nft}>{ nft }</div>
                    {/each }
                </div>
            </div>
            <div class="mt-2 col-xs-10 col-sm-8 d-flex justify-content-center align-items-center">
                <Digree {angle}/>
            </div>

        {:else}
            <div class="mt-2 col-xs-10 col-sm-6 d-flex justify-content-center align-items-center">
                <h6>You don't have ant nfts yet</h6>
            </div>
            
        {/if}
        <!-- <div class="col-10 d-flex justify-content-center">Hu</div> -->
    </div>

</article>


<style>

    .nums {
        border:0.5px solid rgb(48, 136, 70);
        background-color: white;
    }

    .nft { 
        color: white;
        background-color: green; 
        border: 1px solid green; 
    }

    .nft:hover {
        color: green;
        background-color: white;
        cursor: pointer;
    }

    .ib {
        display: inline-block;
    }
    
</style>