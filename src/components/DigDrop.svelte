<script>
    import Fertilizer from "/static/assets/fertilizer.svg";
    import Shovel from "/static/assets/shovel.svg";
    import Clover from "/static/assets/clover.svg";

    import Ada from "./Ada.svelte"

    const cost = 2;

    let loading = false;

    const submit = () => {
        if (!loading) {
            loading = true;
            setTimeout(() => {
                loading = false;
            }, 5000);
        } 
    }

    let powerups = {
        shovel: false,
        clover: false,
        fertilizer: false
    }

</script>


<div id="context-drop" class="dropdown-menu" >
    <div class="d-flex justify-content-center mb-2">
        <form on:submit|preventDefault={submit}>
            <button type="submit" class="btn btn-outline-success btn-sm">
                <Ada {loading} /> 
                { #if !loading}<span>{ cost }</span>{/if}
            </button>
        </form>
    </div>

    <hr class="dropdown-divider">
    <ul>
        <ul class="d-flex row p-2 justify-content-center">
            <li class:active={powerups.shovel} on:click={() => powerups.shovel = !powerups.shovel} class="col"><Shovel/></li>
            <li class:active={powerups.clover} on:click={() => powerups.clover = !powerups.clover} class="col"><Clover/></li>
            <li class:active={powerups.fertilizer} on:click={() => powerups.fertilizer = !powerups.fertilizer} class="col"><Fertilizer/></li>
        </ul>
    </ul>
</div>




<style>
    .dropdown-menu {
        max-width: 5em;
    }
    
    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin-bottom: 0;
    }

    hr {
        color: #402f0fd6;
    }


    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:focus  {
        background-color: #fff;
        box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 50%);
    }

    button:focus:hover {
        color: #42ae7c;
    }

    .col {
        max-width: 33%;
    }
    
    :global(button:hover:not(:focus) .st0) {
        fill: white;
    }

    :global(#context-drop li svg) {
        max-height: 1.5em;

    }

    :global(#context-drop button > svg) {
        min-height: 1.5em;
        max-height: 2em;
        margin-right: 0.1em;
    }

    :global(li.active > svg) {
        filter: drop-shadow(0 0 0.3em #b78ac3);

    }
    

</style>