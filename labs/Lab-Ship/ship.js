class Ship {
	constructor(x, y, vx, vy, rotation, showFlame) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.rotation = rotation;
	console.log(rotation);
	this.showFlame = showFlame;
	this.vel = createVector(vx, vy);
	}

	drawShip()
	{
		push();
		translate(this.x, this.y);
		rotate(this.rotation);
		//lineWidth = 1;
		//context.strokeStyle = "#ffffff";
		beginShape();
		vertex(10, 0);
		vertex(-10, 10);
		vertex(-5, 0);
		vertex(-10, -10);
		vertex(10, 0);
		endShape();
 
		if (this.showFlame == true) {
		beginShape();
		vertex(-7.5, -5);
		vertex(-15, 0);
		vertex(-7.5, 5);
		endShape();
		//context.stroke();
		}
		pop();
	}
	accelerateShip(ax, ay)
	{
		this.vx = this.vx + ax;
		this.vy = this.vy + ay;
	}
	
	
		
	moveShip()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}