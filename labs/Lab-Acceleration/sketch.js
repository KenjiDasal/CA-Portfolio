
let screenWidth = 500;
let screenHeight = 500;
let ax = 0;
let ay = 0;

function setup() { 
    createCanvas(screenWidth, screenHeight);
    let vel = 0;

    background(100, 20, 20);
    ball= new Ball(screenWidth/2, screenHeight/2, vel, vel, 10);

    
        
}

function draw(){
    background(100, 20, 20);
    beginShape();
    ball.drawBall();
    ball.accelerateBall(ax, ay)
    ball.moveBall();
    stroke(0)
    if(ball.x < 0 || ball.x > screenWidth){
        ball.vx = -ball.vx;
    }
    if (ball.y < 0 || ball.y > screenHeight){
        ball.vy = -ball.vy;
    }
    endShape();

    console.log(ax)

    
}

function keyReleased(){
    ball.vx = 0;
    ax = 0;
    ball.vy = 0;
    ay = 0;
}

function keyPressed() {
    if(keyCode == '65'){
        ax = -0.2;
    }
    if(keyCode == '68'){
        ax = 0.2;
    }

    if(keyCode == '87'){
        ay = -0.2;
    }
    if(keyCode == '83'){
        ay = 0.2;
    }
}
