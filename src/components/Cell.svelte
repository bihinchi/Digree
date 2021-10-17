<script>
	import { Col } from "sveltestrap"
    import Ground from "../assets/Texture-ground.svg"
    import Dug from "../assets/Dug.svg"

    export let open;

</script>


<Col xs="6" sm="3" md=1 class="d-flex justify-content-center mb-5">
    
    { #if open }
        <Dug />
    { :else }
        <Ground />
    { /if }
</Col>

<style>
</style>