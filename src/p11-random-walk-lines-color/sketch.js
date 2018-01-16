// Parameters
const p = {
    agentSize: 20,
    stepSize: 10,
    timeIntervalBetweenUpdates: 50,
    agentColorHue: 220 // The reference color is specified with the 'hue' component of the HSB color space
};
// ----------

let agentPosition;
let agentPreviousPosition;
let agentAngle;
let timeOfLastUpdate;
let agentColor; // The other color parameters will be updated randomly

function setup() {
    createCanvas(540, 540);
    initPositionAndColor();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    var currentTime = millis();
    // Position update
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI);
    }
    updatePosition();
    // Boundary conditions
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPositionAndColor();
    }
    // Drawing
    background(255, 255, 255, 1);
    stroke(agentColor);
    strokeWeight(p.agentSize);
    noFill();
    line(agentPreviousPosition.x, agentPreviousPosition.y, agentPosition.x, agentPosition.y);
}

function initPositionAndColor() {
    agentPosition = createVector(random(width), random(height));
    agentPreviousPosition = agentPosition.copy();
    colorMode(HSB, 360, 100, 100); // To update the color randomly while keeping the hue 'p.agentColorHue' defined in the parameters, we create the new color in the HSB color space. The additional parameters of the 'colorMode' function define the maximum value of the hue, saturation and brightness components. The values '360, 100, 100' correspond to the HSB space as defined in Photoshop.
    var c = color(p.agentColorHue, random(100), random(100)); // Creation of the new color in HSB color space
    var r = red(c); // Retrieval of the RGB components of the color
    var g = green(c);
    var b = blue(c);
    colorMode(RGB); // Going back into RGB mode
    agentColor = color(r, g, b); // Definition of the agent's color in RGB mode
}

function updatePosition() {
    agentPreviousPosition = agentPosition.copy();
    agentPosition.x += cos(agentAngle) * p.stepSize;
    agentPosition.y += sin(agentAngle) * p.stepSize;
}
