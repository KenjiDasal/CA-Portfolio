class Bullet{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.velocity = bulletVelocity;
    }
    render() {
        push();
        translate(this.pos.x, this.pos.y,); 
        fill(0,0,255);
        ellipse(0, 0, bulletWidth, bulletHeight);
        pop();
    }

    move(){
        this.pos.y -= this.velocity;
    }
    shift(){
        this.pos.y += shiftDown;
        this.velocity *= -1;
    }
    
    hits(alien){
        let distance = (p5.Vector.sub(this.pos, alien.pos)).mag();
        if(distance < 30){
            return true;
        }else{
            return false;
        }
    }
}