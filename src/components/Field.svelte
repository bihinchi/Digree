<script>
	import { Container, Row } from "sveltestrap"

    import DigDrop from "./DigDrop.svelte";


	import Cell from "./Cell.svelte";
    
</script>

    <Container fluid class="p-xs-3 p-md-5">
        <Row class="justify-content-around ">

            {#each Array(60) as _, i}
                <Cell id={i} open={i % 2 == 1}/>
            {/each}
            
            <DigDrop />
        </Row>

        <!-- <DigDrop labelled="cell-{i}"/> -->

	</Container>


