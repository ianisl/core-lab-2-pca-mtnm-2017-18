// Parameters
const p = {
    agentSize: 10,
    stepSize: 2
};
// ----------

let agentPosition;
let agentAngle;

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
}

function draw() {
    // Position update
    agentAngle = random(0, TWO_PI);
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
