//Check for x of alien its going off to the right of the sreen
let params = {
    numRow : 3,
    numCol : 10
};

let screenWidth = 500;
let screenHeight = 500;
let alienImg;

let aliens=[];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;



let hSpace = 50;
let vSpace = 30;
let hOffset = (screenWidth - (params.numCol - 1) * hSpace) / 2;
let vOffset = 30;

let shiftDown = 50;

let shooterWidth = 50;
let shooterHeight = 20;
let shooter;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 5;

let emitters = [];

var gui;

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}


function setup() {
    populateAliens();

    gui=QuickSettings.create(550, 25, "MyGameControls")
    .addRange("Number of Collums",  5 , 20, params.numCol, 1, 
    function (value){
        params.numCol = value
        aliens=[];
        hOffset = (screenWidth - (params.numCol - 1) * hSpace) / 2;
        populateAliens();
    })

    .addRange("Number of Rows",  3 , 10, params.numRow, 1, 
    function (value){
        params.numRow = value
        aliens=[];
        populateAliens();
    })

    shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
    
}

function draw() {
    
    background(0);
    emitters.forEach(emitter=> {
        emitter.createParticles();
        emitter.update();
        emitter.show();
    })
    // shooter.move();
    shooter.render();

    let shift = false;
    aliens.forEach(alien =>{
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth-10 ? shift=true : null;
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
                emitters.push(new Emitter(aliens[j].pos.x, aliens[j].pos.y))
                aliens.splice(j, 1);
                bullets.splice(i, 1);
                
                break
            }
        }
    }
   

    checkGameStatus();
}

function checkGameStatus() {
    let gameOver = false;
    aliens.forEach(alien =>{
        if(alien.pos.y > 650){
            console.log('Game Over')
            gameOver = true;
        }
    });

    if (gameOver) {
        noLoop();
        textSize(120)
        textLeading(110)
        fill(255, 0, 0);
        textAlign(CENTER, CENTER)
        text("Game\nOver", 250, 200)
    }
}

function keyPressed() {
    if(keyCode === 32){
        bullets.push(new Bullet(shooter.pos.x, screenHeight-shooterHeight, shooter.barrelAngle))
    }

    if(keyCode === 49){
        noLoop();
    }

    if(keyCode === RIGHT_ARROW) {
        shooter.barrelAngle += 0.2;
    } else if(keyCode === LEFT_ARROW) {
        shooter.barrelAngle -= 0.2;
    }
}

function populateAliens() {
    for(let row = 0; row < params.numRow; row++) {
    for(let col = 0; col < params.numCol; col++) {
    aliens.push(new Alien(col * hSpace + hOffset, row * vSpace + vOffset ))
    
}
    }
}