// Parameters
// Good practice: store the parameters in a variable initialized at the beginning og the sketch
const p = {
    agentSize: 10,
    stepSize: 2 // Position increment (aka agent speed)
};
// ----------

let agentPosition; // Utility variables (which need to be global but aren't parameters per se) are declared just before the 'setup' function

function setup() {
    createCanvas(540, 540);
    agentPosition = createVector(0, height/2); // The functions and variables defined by the p5.js library are not available outside of methods such as 'setup' and 'draw'
    background(255);
}

function draw() {
    // Position update
    agentPosition.x += p.stepSize;
    // Boundary conditions
    if (agentPosition.x > width) {
        agentPosition.x = 0;
    }
    // Drawing
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, p.agentSize, p.agentSize);
}
