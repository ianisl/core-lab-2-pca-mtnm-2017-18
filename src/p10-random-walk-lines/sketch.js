// Parameters
const p = {
    agentSize: 2,
    stepSize: 10,
    timeIntervalBetweenUpdates: 100
};
// ----------

let agentPosition;
let agentPreviousPosition; // Variable used to store the agent's previous position
let agentAngle;
let timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    // Position update
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI);
    }
    updatePosition();
    // Boundary conditions
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Drawing
    background(255, 255, 255, 3);
    stroke(0); // Be careful to adapt the drawing method's as needed. We use here 'line' instead of 'ellipse'
    strokeWeight(p.agentSize);
    noFill();
    line(agentPreviousPosition.x, agentPreviousPosition.y, agentPosition.x, agentPosition.y); // Tracing a line between the previous and current positions helps avoiding discontinuous trajectories
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
    agentPreviousPosition = agentPosition.copy(); // Initialization of the variable used for position storage. Important: the 'copy' method needs to be used to actually copy the vector. A simple assignement ('agentPreviousPosition = agentPosition') would simply create a reference.

}

function updatePosition() {
    agentPreviousPosition = agentPosition.copy(); // Saving of the agent's previous position
    agentPosition.x += cos(agentAngle) * p.stepSize;
    agentPosition.y += sin(agentAngle) * p.stepSize;
}
