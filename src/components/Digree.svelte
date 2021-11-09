<script>
    export let angle;

    import P5 from 'p5-svelte';


	const canvasWidth = 200;
	const canvasHeight = 200;
	
	const background_color = 255;
	let initRadius = canvasWidth / 6;
	
	let stepMaker = 216;
	
	let points = 60;
	
	let fillObject = { r : 0, g : 0, b : 0 }
	
	let step = 0.01;

	let shape ;

	//let angle = 111
	let start = 9;

	let shapes = []

	let fill = false;

	$: fillcolor = [fillObject.r, fillObject.g, fillObject.b]

	$: if (shape && (shape.name == "points" || shape.name == "lines")) fill = false

	let strokecolor;


	function colorCallback(rgba) {
		const d = rgba.detail
		strokecolor = [d.r, d.g, d.b]
	}

	function fillColorCallback(rgba) {
		const d = rgba.detail
		fillcolor = [d.r, d.g, d.b]
	}



	function drawShape(p5) {
  
		p5.push();

		let radius = initRadius;


		const radiusStep = radius / stepMaker;

		p5.stroke(strokecolor)
		
		
		if (fill) p5.fill(fillcolor)

		if (shape?.name == "points") p5.strokeWeight(10)
		p5.beginShape(shape?.value);

		//if (shape == POINTS) strokeWeight(5)
		
		for(let i = start; i <= start + points; i++) {
			radius += radiusStep
			const x = p5.cos(p5.radians(i*angle)) * radius;
			const y = p5.sin(p5.radians(i*angle)) * radius;
			p5.vertex(x, y);
		}

		p5.endShape();

		p5.pop();


		start = (start + step) % points;

		if (start >= 10) {
		
			if (step > 0.0000000001) step = step / 10;
			else if (step > 0) step *= -1;;

			if (step < 0 && step >= -0.01) step *= 10;
		}

		if (start <= 9) {

			if (step < -0.0000000001) step /= 10;
			else if (step < 0) step *= -1;

			if (step > 0 && step <= 0.01) step *= 10;
		}



	}



	function draw(p5) {
		p5.background(background_color)

		p5.translate(p5.width/2, p5.height/2);
		p5.strokeWeight(2);
		drawShape(p5)  
	}




	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(canvasWidth, canvasHeight, 'svg');
			strokecolor = [p5.random(256), p5.random(256), p5.random(256)]
			p5.frameRate(35);

			shapes = [
				{ name: "default", value: undefined },
				{ name: "points", value: p5.POINTS },
				{ name: "lines", value: p5.LINES },
				{ name: "triangles", value: p5.TRIANGLES },
				{ name: "triangle strip", value: p5.TRIANGLE_STRIP },
				{ name: "quads", value: p5.QUADS },
				{ name: "quads strip", value: p5.QUAD_STRIP }
			]
		};

		p5.draw = () => draw(p5);
	};
</script>


<div>
	<!-- <label>
	  Angle
	  <input type="number" bind:value={angle} min="0" max="360" step="1" />
	</label>

	<label>
		Init radius
		<input type="number" bind:value={initRadius} min="1" max="360" step="1" />
	  </label>

	<label>
	  Step radius
	  <input type="number" bind:value={stepMaker} min="1" max="360" step="1" />
	</label>

	<label>
	  Points
	  <input type="number" bind:value={points} min="10" max="1000" step="1" />
	</label>

	<label>
	  Fill
	  <input type="checkbox" bind:checked={fill}/>
	  { fill ? " filling " : "not filling"}
	</label>

	  <select bind:value={shape} on:change={() => 
	  {	 if (!shape || shape.name == "points" || shape.name == "lines") fill = false }}>
		  {#each shapes as shape, i}
			  <option value={shape}>
				  {shape.name}
			  </option>
		  {/each}
	  </select> -->

</div>

<P5 {sketch} />


<style>
	:global(canvas) {
		width: 100%!important;
		height: 100%!important;
	}
</style>
