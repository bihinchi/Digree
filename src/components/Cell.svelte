<script>

    import Ground from "../assets/Texture-ground.svg"
    import Dug from "../assets/Dug.svg"

    export let open;
</script>

<div class="col-xs-5 col-sm-4 cols-md-3 col-lg-2 d-flex justify-content-center mb-5" dropdown-toggle data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">

    { #if open }
        <Dug />
    { :else }
        <Ground />
    { /if }
</div>


<style>
    div {
        max-width: 35%;
    }

    div:hover {
        cursor: pointer;
    }
    
</style>
