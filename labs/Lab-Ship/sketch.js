let direction = 60;
let boost = 0;
let vr = 0;
let a = 0;
let velx = 0;
let vely = 0;
let ax = 0;
let ay = 0;
let flame = false;
function setup() {
    createCanvas(1000,1000);
    background(127);
    noFill();
    angleMode(DEGREES);
    ship = new Ship(width/2, height/2, velx, vely, vr, flame);

}

function draw() {
    background(127);
    beginShape();
    ship.drawShip();
    ship.rotation += vr;
    ship.accelerateShip(ax,ay);
    ship.moveShip();
    endShape();

    ship.vx = velx;
    ship.vy = vely;
    ship.showFlame = flame;

    velx = boost * cos(ship.rotation);
    vely = boost * sin(ship.rotation);

    if (ship.rotation < 0){
        ship.rotation = 360
    } else if (ship.rotation > 360) {
        ship.rotation = 0
    }


    console.log('vx', velx);
    console.log('vy', vely);
    console.log('vr', ship.rotation);
    console.log('flame', ship.showFlame)
    
   
}

function keyReleased(){
    vr = 0;
    boost -= 4;
    if(boost < 0) {
        boost = 0;
    }
    flame = false;
}

function keyPressed() {
    if(keyCode == '65'){
        vr -= 5;
    }
    if(keyCode == '68'){
        vr += 5;
    }

    if(keyCode == '87'){
        boost = 2.5
        flame = true;
    }
}







