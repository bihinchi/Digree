let r = 10
let a = 0
let c = 20

let bom = 0
let m = 160

let ms;

let start = 9;
let step = 0;

let color;

let count;

let shapes, fills;

let radius;

let radiusus;

let back;

function setup() {
  createCanvas(600, 600);
  m = 237//Math.round(random(1)) + 20

  step = 0.01

  frameRate(15)

  count = random([1,2,3])
  radiusus = [random(60, 90), random(60, 90), random(60, 90)]
  
  colors = [], shapes = [], fills = [], ms = [];

  for (let i = 0; i < count; i++) {
    colors.push([random(255), random(255), random(255)])
    shapes.push(random([POINTS, LINES, TRIANGLES, QUADS, QUAD_STRIP, TESS]))
    fills.push(random([true, false]))
    ms.push(Math.round(random(0, 360)))
  }  

  back = random(240, 255)
}


function drawShape(i) {
  
  push();

  let radius = radiusus[i];
  const radiusStep = radius / 216;

  stroke(colors[i])

  if (!fills) noFill();
  //else fill(colors[i])

  const shape = shapes[i]; 
  beginShape(shape);

  if (shape == POINTS) strokeWeight(5)

  m = ms[i]

  for(let i = start; i <= start + 360; i++) {
    radius += radiusStep
    const x = cos(radians(i*m)) * radius;
    const y = sin(radians(i*m)) * radius;
    vertex(x, y);
  }
  endShape();

  pop();

  start = (start + step) % 360;

  if (start > 10)
    console.log(start);

  console.log(step);

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


function draw() {
  
  background(back)

  let st = ""

  ms.forEach(m => st += m.toString() + " ");;

  text('M: ' + st, 10, 30);

  translate(width/2, height/2);
  strokeWeight(1)


  for (let i = 0; i < count; i++) {
    drawShape(i)  
  }
}
