<script>

	import { Router, Route } from "svelte-routing";


	export let url = "";

	import Home from "../routes/Home.svelte";
	import Browse from "../routes/Home.svelte";

</script>


<Router url="{url}">
<div>
	<Route path="/"><Home /></Route>
    <Route path="blog" component="{Browse}" />
    <Route path="about" component="{About}" />
</div>
</Router>
