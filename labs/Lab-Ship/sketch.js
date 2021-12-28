let direction = 60;
let speed = 0;
let angle = 0;
let a = 0;
let ax = 0;
let ay = 0;
function setup() {
    velx = speed * cos(direction);
    vely = speed * sin(direction);
    createCanvas(1000,1000);
    background(127);
    noFill();
    angleMode(DEGREES);
    ship = new Ship(width/2, height/2, velx, vely, angle, 255);

}

function draw() {
    background(127);
    beginShape();
    ship.drawShip();
    ship.accelerateShip(ax,ay);
    ship.moveShip();
    endShape();
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        angle - 0.1;
    }
}







