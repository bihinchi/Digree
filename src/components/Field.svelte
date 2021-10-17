<script>
	import { Container, Row } from "sveltestrap"

	import Cell from "./Cell.svelte";
</script>

    <Container fluid class="p-xs-3 p-md-5">

        {#each Array(8) as _, i}
            <Row class="d-flex justify-content-around">
                {#each Array(8) as num, j}
                    <Cell open={j % 2 == 1}/>
                {/each}
            </Row>
        {/each}

	</Container>


