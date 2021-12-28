let direction = 60;
let speed = 6;
let a = 0;
function setup() {
    velx = speed * cos(direction);
    vely = speed * sin(direction);
    createCanvas(1000,1000);
    background(127);
    noFill();
    angleMode(DEGREES);
    arrow = new ArrowUpdated(width/2, height/2, velx, vely, 0, 255);

}

function draw() {
    background(127);
    arrow.drawArrow();
    arrow.moveArrow();

    
}




