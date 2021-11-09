

export const ShapeType = {
    DEFAULT : 0, 
    POINTS : 1, 
    LINES : 2, 
    TRIANGLES : 3, 
    QUADS : 4, 
    STRIPES : 5 
}


export const shapeP5 = function(shapeType, p5) {
    if (shapeType === ShapeType.POINTS) return p5.POINTS;
    else if (shapeType === ShapeType.LINES) return p5.LINES;
    if (shapeType === ShapeType.TRIANGLES) return p5.TRIANGLES;
    if (shapeType === ShapeType.QUADS) return p5.QUADS;
    if (shapeType === ShapeType.STRIPES) return p5.QUAD_STRIP;
    if (shapeType === ShapeType.POINTS) return p5.POINTS;

}


export class Shape {    

    constructor(tokenMeta) {
        this.angle = tokenMeta.angle
        this.shapeType = tokenMeta.shapeType;
        this.setDemoParams();
    }

    changeAngle(angle) {
        this.angle = angle;
        this.setDemoParams();
    }


    fill (zoomMin, zoomMax, strokeWeightMin, strokeWeightMax)  {
    	this.zoomMin = zoomMin; 
		this.zoomMax = zoomMax; 
		this.strokeWeightMin = strokeWeightMin; 
		this.strokeWeightMax = strokeWeightMax; 
	}

    setDemoParams() {
        if (this.angle === 0) {
            this.fill(30, 250, 1, 30)
        }
        
        else if (this.angle < 10) {
            this.fill(120, 450, 1, 15);
        } 
        
        else if (this.angle < 15) {
            this.fill(105, 420, 1, 5)
        } 
        
        else if (this.angle < 20) {
            this.fill(105, 420, 1, 5)
        } 
        
        else if (this.angle < 20) {
            this.fill(105, 400, 1, 5)
        } 
        
        else {
            this.fill(50, 350, 1, 5);
        }
    }

}