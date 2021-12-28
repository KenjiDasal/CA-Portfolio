let mouse = 0;
function setup() {
    createCanvas(1000,1000);
    background(127);
    noFill();
    angleMode(DEGREES);
    arrow = new Arrow(width/2, height/2, mouse);

}

function draw() {
    mouse =  atan2(mouseY - this.y, mouseX - this.x);
    background(127);
    arrow.drawArrow();
}




