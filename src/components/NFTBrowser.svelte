<script>
    import Digree from "./Digree.svelte";
</script>


<main class=container>
    <div class="row">
        { #each Array(25) as _, i}
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                <Digree angle={(i+10)*12}/>
            </div>
        {/each}
    </div>
</main>