let xOldLocation = defaultXLocation;
let yOldLocation = defaultYLocation;

myBall.style.left = defaultXLocation + 'px';
myBall.style.bottom = defaultYLocation + 'px';

function moveBall (direction) {
    let xMovement = xOldLocation;
    let yMovement = yOldLocation;
    if (direction == 'left') {
        xMovement = xOldLocation - steps;
    } else if (direction == 'right') {
        xMovement = xOldLocation + steps;
    } else if (direction == 'up') {
    yMovement = yOldLocation + steps;
    } else if (direction == 'down') {
    yMovement = yOldLocation - steps;
    }
    if (xMovement >-10 && xMovement < 600 ) {
        myBall.style.left = xMovement + 'px';
        xOldLocation = xMovement;
    } 
    if (yMovement >-10 && yMovement < 300) {
        myBall.style.bottom = yMovement + 'px';
        yOldLocation = yMovement;
    }
}