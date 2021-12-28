//Check for x of alien its going off to the right of the sreen


let screenWidth = 500;
let screenHeight = 500;
let alienImg;

let aliens=[];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;

let numRow = 5;
let numCol = 10;

let hSpace = 50;
let vSpace = 30;
let hOffset = (screenWidth - (numCol - 1) * hSpace) / 2;
let vOffset = 30;

let shiftDown = 50;

let shooterWidth = 50;
let shooterHeight = 20;
let shooter;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 5;

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}


function setup() {
    populateAliens();
    shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);
    shooter.move();
    shooter.render();

    let shift = false;
    
    aliens.forEach(alien =>{
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift=true : null;
        alien.pos.x <= 0 ? shift=true : null;
    
    });

    if(shift) {
        aliens.forEach(alien => {
            alien.shift();
        })
    }

    for(let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        bullets[i].render();
        for(let j = aliens.length -1; j >= 0; j--) {
            if(bullets[i].hits(aliens[j])){
                console.log('connect')
                aliens.splice(j, 1);
                bullets.splice(i, 1);
                break
            }
        }
    }
}

function keyPressed() {
    if(keyCode === 32){
        bullets.push(new Bullet(shooter.pos.x, screenHeight-shooterHeight))
    }

    if(keyCode === RIGHT_ARROW) {
        shooter.setDirections(2);
    } else if(keyCode === LEFT_ARROW) {
        shooter.setDirections(-2);
    }
}

function populateAliens() {
    for(let row = 0; row < numRow; row++) {
    for(let col = 0; col < numCol; col++) {
    aliens.push(new Alien(col * hSpace + hOffset, row * vSpace + vOffset ))
    
}
    }
}