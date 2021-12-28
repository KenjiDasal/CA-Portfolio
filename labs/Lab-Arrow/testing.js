var timer, angle1, angle2;
var a, b, m, n1, n2, n3, formula, radius, x, y;

function setup() {
  initializeFields();
  createCanvas(1000,1000);
  noFill();
  strokeWeight(2);

  
  } 

function draw(){ 
  background(127);
  noFill();
    translate(width / 2, height / 2);
    // FirstimerShape
    beginShape();
    push();
    rotate(radians(angle1));
    for (theta = 0; theta < 2 * PI; theta += 0.001) {
        radius = formula(
        theta, // a
        2, // b
        2, // m
        50, // n1
        1, // n2
        sin(timer) * 0.5 + 2, // n3
        cos(timer) * 2 + 0.5
        );
        sx = radius * cos(theta) * 50;
        sy = radius * sin(theta) * 50;
        vertex(sx, sy);

        
    }
    angle1 += 5;
    endShape();
    timer+= 0.1;
    /* Second Shape */
    beginShape();
    rotate(radians(angle2));
    for (theta = 0; theta < 2 * PI; theta += 0.01) {
        radius = formula(theta, // a
        sin(timer) * 2 + 0.5, // b
        cos(timer) * 0.5 + 2, // m
        30, // n1
        1, // n2
        1, // n3
        1);
        sx = radius * cos(theta) * 50;
        sy = radius * sin(theta) * 50;
        vertex(sx, sy);

        
    }
    angle2 -= 10;
     /* OuterCircle */
 endShape();
 beginShape();
 
 for (theta = 0; theta < 2 * PI; theta += 0.01){ 
   radius = formula(
   theta, 
   5.6, // a 
   5.6, // b 
   0, // m 
   5.6, // n1 
   5.6, // n2 
   5.6 // n3 
   ); 
    sx = radius * cos(theta) * 50; 
    sy = radius * sin(theta) * 50; 
   vertex(sx,sy); 
  }
  pop();
 endShape();
 //Creating a rectangle thatimercreates a motion blur effectimeron the shapes 
 
 fill (0,40);
}


 
 //SUPERFORMULA equation translated into processing syntax//
 
 function formula(theta, a, b, m, n1, n2, n3) {
  return pow(pow(abs(cos(m * theta / 4.0) / a), n2) + pow(abs(sin(m * theta / 4.0) / b), n3), -1.0 / n1);
}

function initializeFields() {
  timer= 0;
  angle1 = 0;
  angle2 = 0;
  a = 0;
  b = 0;
  m = 0;
  n1 = 0;
  n2 = 0;
  n3 = 0;

}