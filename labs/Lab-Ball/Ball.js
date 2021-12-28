class Ball {
	constructor(x, y, vx, vy, radius) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = random(0,255);
		this.g = random(0,255);
		this.b = random(0,255);
		//this.rotation = 0;
	
   }
   //function to draw the ball
   drawBall() {
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}

console.log("testing");

