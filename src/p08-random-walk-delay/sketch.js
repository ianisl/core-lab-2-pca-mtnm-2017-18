// Parameters
const p = {
    agentSize: 10,
    stepSize: 2,
    timeIntervalBetweenUpdates: 300 // Time interval (in milliseconds) between two successive updates of the agent's angle
};
// ----------

let agentPosition;
let agentAngle;
let timeOfLastUpdate; // Variable used to store the time of the last update of the agent's angle

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis(); // Initialization
}

function draw() {
    let currentTime = millis(); // Very important: current time needs to be measured only once (at the beginning of 'draw') and stored in a variable for later use
    // Position update
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI); // If enough time has passed: define a new random angle
    }
    updatePosition();
    // Boundary conditions
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Drawing
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, p.agentSize, p.agentSize);
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
}

function updatePosition() {
    agentPosition.x += cos(agentAngle) * p.stepSize;
    agentPosition.y += sin(agentAngle) * p.stepSize;
}
