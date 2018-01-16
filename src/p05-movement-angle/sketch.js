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
    agentPosition = createVector(random(width), random(height)); // Random position
    agentAngle = random(0, TWO_PI); // Random direction
    background(255);
}

function draw() {
    // Position update
    agentPosition.x += cos(agentAngle) * p.stepSize;
    agentPosition.y += sin(agentAngle) * p.stepSize;
    // Boundary conditions
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        agentPosition = createVector(random(width), random(height)); // If the agent gets outside the drawing zone, we give it a new random position
    }
    // Drawing
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, p.agentSize, p.agentSize);
}
