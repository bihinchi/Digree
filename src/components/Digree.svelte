<script lang="ts">
	import { Shape, ShapeType, shapeP5 } from "../js/shape"
	import { onMount } from "svelte";
	import { web3 } from "../js/stores";

	let P5 : SvelteComponent;


	let canvasHeight, canvasWidth;
	
	const background_color = 250;//[35, 9, 100];

	export let angle = 0;

	/* setInterval(() => {
		angle = (angle + 1) % 360
	}, 3500); */

	
	const shape = new Shape({ angle, shapeType : ShapeType.DEFAULT })

	$: shape.changeAngle(angle);

	let strokeColor = { hue : 100, saturation : 80, brightness: 35 };
	$: stroke = [strokeColor.hue, strokeColor.saturation, strokeColor.brightness]


	const params = {
		radius : {
			value: canvasWidth / 6,
			min: canvasWidth / 9,
			max: canvasWidth / 6,
			baseVelocity: 1,
			velocity: 1,
			velMin: 0.1,
			acceleration: 1.01,
			accThreshold: 0.95,
			delay: 0,
			delayActive: false
		},

		radiusStep : {
			value: 250,
			min: shape.zoomMin,
			max: shape.zoomMax,
			baseVelocity: 1.0,
			velocity: 1.0,
			velMin: 0.005,
			acceleration: 1 + 1e-12,
			accThreshold: 0.92,
			delay: 1600,
			delayActive: false,
			delayFinished: false
		}, 

		angle : {
			value: angle,
			min: angle - 0.5,
			max: angle + 0.4999,
			baseVelocity: 0.00001,
			velocity: 0.00001,
			velMin: 0.0000005,
			acceleration: 1.0000001,
			accThreshold: 0.95,
			delay: 1500,
			delayActive: false,
			delayFinished: false
		},

		strokeHue : {
			value: strokeColor.hue,
			min: 0,
			max: 360,
			baseVelocity: 0.01,
			velocity: 0.01,
			velMin: 0.00005,
			acceleration: 1.000001,
			accThreshold: 0.95,
			delay: 1500,
			delayActive: false,
			delayFinished: false
		},

		strokeWeight : {
			value: 1,
			min: shape.strokeWeightMin,
			max: shape.strokeWeightMax,
			baseVelocity: 0.002,
			velocity: 0.002,
			velMin: 0.00005,
			acceleration: 1.0000001,
			accThreshold: 0.95,
			delay: 500,
			delayActive: false,
			delayFinished: false
		}
	}

	$: {
		params.angle.value = angle;
		
		params.radiusStep.min = shape.zoomMin;
		params.radiusStep.max = shape.zoomMax;

		params.strokeWeight.min = shape.strokeWeightMin;
		params.strokeWeight.max = shape.strokeWeightMax;
	}
	
	$: {
		params.radius.value = canvasWidth / 6
		params.radiusStep.value = params.radius.value * 2.5

	}


	let points = 250;
	
	let fillObject = { r : 0, g : 0, b : 0 }
	

	let rotation = 0
	let start = 0;

	let shapes = []

	let fill = false;

	$: fillcolor = [fillObject.r, fillObject.g, fillObject.b]



	function paramsChanger(key) {

		const param = params[key]

		const { min, max, velMin, baseVelocity, acceleration, accThreshold, 
			delay, delayActive, delayFinished } = param;
		
		if (delayActive) return;
		
		let { velocity, value } = param;

		value += velocity;
		
		if ((velocity > 0 && value >= max) || (velocity <= 0 && value <= min)) {
			if (delay > 0 && !delayFinished) {
				param.delayActive = true;
				setTimeout(() => {
					velocity *= -1
					param.delayActive = false;
					param.delayFinished = true
				}, delay);
			} else {
				velocity *= -1
				param.delayFinished = false
			}
		}


		if (velocity > 0) {

			if (value/max >= accThreshold ) {
				velocity =  Math.max(velMin, velocity / acceleration);
			} else if (velocity != baseVelocity) {
				velocity = Math.min(velocity * acceleration, baseVelocity)
			}

		} else {

			if (min/value >= accThreshold) {
				velocity = Math.min(velocity / acceleration, -velMin);
			} else if (velocity != -baseVelocity) {
				velocity = Math.max(velocity * acceleration, -baseVelocity)
			}
		}

		param.value = value;
		param.velocity = velocity;

	}



	function drawShape(p5) {
  
		let curRadius = params.radius.value;
		const radiusStep = curRadius / params.radiusStep.value // stepMaker != 360 ? curRadius / stepMaker : 0;
		
		p5.stroke(stroke)
		
		if (fill) p5.fill(fillcolor)


		p5.beginShape(shapeP5(shape.shapeType, p5));


		for(let i = start; i <= start + points; i++) {

			p5.rotate(p5.radians(rotation))

			curRadius +=  radiusStep
			const x = p5.cos(p5.radians(i*params.angle.value)) * curRadius;
			const y = p5.sin(p5.radians(i*params.angle.value)) * curRadius;
			
			//if (x >= p5.width*(-4.5) && x <= p5.width*(4.5) && y >= p5.height*(-4.5) && y < p5.height * 4.5 )
				p5.vertex(x, y);
			
		}

	
		rotation = (rotation + 0.008) % points ;

		strokeColor = {
			...strokeColor,
			hue: (strokeColor.hue + 0.5) % 360,
			saturation: (strokeColor.saturation + 0.002) % 100,
			brightness: (strokeColor.brightness + 0.001) % 75,
		}

		p5.endShape();

	}




	function draw(p5) {
		p5.clear();
		p5.background(background_color)
		p5.noFill();
		p5.translate(p5.width/2, p5.height/2);
		p5.strokeWeight(params.strokeWeight.value)
		drawShape(p5);

		paramsChanger('radiusStep')
		paramsChanger('strokeWeight')
		//paramsChanger('angle')

	}




	const sketch = (p5) => {
		p5.setup = () => {


			canvasHeight = p5.windowHeight * 0.55;
			canvasWidth = canvasHeight;
			

			//init.default(p5lib)

			p5.createCanvas(canvasWidth, canvasHeight, 'svg');
			
			p5.colorMode(p5.HSB, 360, 100, 100)

			strokeColor = { hue : p5.random(360), saturation : 80, brightness: p5.random(35, 80) };

			p5.frameRate(85);

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
		p5.windowResized = () => {
			canvasHeight =  p5.windowHeight * 0.55
			canvasWidth = canvasHeight //p5.windowWidth * 0.4;
			p5.resizeCanvas(canvasWidth, canvasHeight)
		}

	};

	/* setInterval(() => {
		angle += 1
	}, 10000); */

	

	onMount(async () => {

		(() => {
			setTimeout(() => {
				if (!web3.connected) {
					window.location = "/"
				}
			}, 1200)
		})();

		
		(await import('p5')).default;
		(await import('p5.js-svg')).default;
		P5 = (await import('p5-svelte')).default;
	})

</script>


{ #if P5}
	<P5 {sketch} />
{/if}



<style>
	
	:global(.p5Canvas) {
		border:0.5px solid rgb(48, 136, 70);

		/* min-width: 50%;
		max-width: 100%; */
	}


</style>
