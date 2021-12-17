<script>
    import DigDrop from "./DigDrop.svelte";
	import Cell from "./Cell.svelte";
</script>

<div class="container p-xs-1 p-md-3">

    <div class="row justify-content-around dropdown">

        {#each Array(60) as _, i}
            <Cell open={i % 2 == 1}/>
        {/each}
        
        <DigDrop />

    </div>
    
</div>

<style>
</style>
