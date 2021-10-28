<script>

	import { Router, Route } from "svelte-routing";


	export let url = "";

	import Home from "../routes/Home.svelte";
	import Browser from "../routes/Browser.svelte";

</script>


<Router url="{url}">
	<div>
		<!-- <Route path="/"><Home /></Route> -->
		<Route path="/" component="{Browser}" />
	</div>
</Router>
