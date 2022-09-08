circleY = 50;
circleX = 50;
speedX = 5;
speedY = 5;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    console.log('hello');
    background(128);
    fill(255,0,0);
    circle(windowWidth/2,circleY,100);
    circleY = circleY + speedY;
    if (circleY > windowHeight - 50 || circleY < 50) {
        speedY = -speedY;
    }
    fill(0,0,255);
    circle(circleX,windowHeight/2,100);
    circleX = circleX + speedX;
    if (circleX > windowWidth - 50 || circleX < 50) {
        speedX = -speedX;
    }
}