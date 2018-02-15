// Parameters
const p = {
    agentCount: 1000,
    agentSize: 5,
    agentAlpha: 5, // For better trace effects, we can completely disable screen clearing and draw with transparent colors
    minStepSize: 0.2,
    maxStepSize: 2,
    timeIntervalBetweenUpdates: 100
};
// ----------

let agents;
let timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agents = [];
    let a;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        a = new Agent();
        a.stepSize = random(p.minStepSize, p.maxStepSize);
        agents.push(a);
    };
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    // Position update
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agents.forEach(function(a) {
            a.angle = random(0, TWO_PI);
        });
    }
    agents.forEach(function(a) {
        a.updatePosition();
    });
    // Drawing
    stroke(0, p.agentAlpha); // Another method of specifying a grayscale color with a transparency value
    strokeWeight(p.agentSize);
    noFill();
    agents.forEach(function (a) {
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}
