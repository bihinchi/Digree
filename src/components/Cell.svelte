<script lang="ts">
    import Ground from "/static/assets/Texture-ground.svg"
    import Dug from "/static/assets/Dug.svg"
    
    export let open : boolean = false;
</script>

<div class="col-xs-4 col-sm-3 cols-md-2 col-lg-1 d-flex justify-content-center mb-1" dropdown-toggle data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
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
