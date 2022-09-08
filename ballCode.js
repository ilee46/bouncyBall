circleY = 50;
speed = 5;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    console.log('hello');
    background(0);
    circle(windowWidth/2,circleY,100);
    circleY = circleY + speed;
    if (circleY > windowHeight - 50) {
        speed = -speed;
    }
    if (circleY < 50) {
        speed = -speed;
    }
}