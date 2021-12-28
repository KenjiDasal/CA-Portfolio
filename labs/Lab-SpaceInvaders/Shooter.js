class Shooter{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.direction = 0;
    }
    render() {
        push();
        translate(this.pos.x, this.pos.y,);  
        fill(0,0,255);
        rectMode(CENTER);
        rect(0, 0, shooterWidth, shooterHeight); 
        pop();
    }

    move(){
        if (this.pos.x < 0 || this.pos.x > 500){
            this.direction *= -1
        }
        this.pos.x += this.direction;
    }
    shift(){
        this.pos.y += shiftDown;
        this.velocity *= -1;
    }

    setDirections(direction){
        this.direction = direction;
    }
    
}