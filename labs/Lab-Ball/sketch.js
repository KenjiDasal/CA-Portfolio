
let screenWidth = 500;
let screenHeight = 500;
let angle1 = 0;
let angle2 = 0;

function setup() { 
    createCanvas(screenWidth, screenHeight);
    let angle1 = 25;
    let angle2 = 47;

    let velx1 = 15 * cos(angle1);
    let vely1 = 15 * sin(angle1);

    let velx2 = 15 * cos(angle2);
    let vely2 = 15 * sin(angle2);



    background(100, 20, 20);
    ball1= new Ball(200, 400, velx1, vely1, 20); 
    ball2= new Ball(100, 240, velx2, vely2, 20); 

    
        
}

function draw(){
    background(100, 20, 20);
    beginShape();
    ball1.moveBall();
    ball1.drawBall();
    stroke(0)
    if(ball1.x < 0 || ball1.x > screenWidth){
        ball1.vx = -ball1.vx;
    }

    if (ball1.y < 0 || ball1.y > screenHeight){
        ball1.vy = -ball1.vy;
    }
    endShape();

    beginShape();
    ball2.moveBall();
    ball2.drawBall();
    stroke(255);

    if(ball2.x > screenWidth || ball2.x < 0){
        ball2.vx = - ball2.vx;
    }
    if (ball2.y < 0 || ball2.y > screenHeight){
        ball2.vy = -ball2.vy;
    }
    endShape();


    if (dist(ball1.x, ball1.y, ball2.x, ball2.y) < ball1.radius + ball2.radius){
        console.log('collide');
        ball2.vy = -ball2.vy;
        ball1.vy = -ball1.vy;
        ball2.vx = -ball2.vx;
        ball1.vx = -ball1.vx;
    } else {
        console.log('not collide')
    }

    
}




