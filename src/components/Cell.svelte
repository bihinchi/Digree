<script>

    import Ground from "../assets/Texture-ground.svg"
    import Dug from "../assets/Dug.svg"

    export let open, id;
</script>

<div dropdown-toggle data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" on:click={() => console.log(id)} id="cell-{id}" class="col-xs-6 col-sm-3 cols-md-1 d-flex justify-content-center mb-5">

    { #if open }
        <Dug />
    { :else }
        <Ground />
    { /if }
</div>


