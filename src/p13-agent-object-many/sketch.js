// Parameters
const p = {
    agentCount: 5000,
    agentSize: 2,
    minStepSize: 0.2, // Each agent will be initialized with a 'stepSize' chosen randomly between 'minStepSize' and 'maxStepSize'
    maxStepSize: 4,
    timeIntervalBetweenUpdates: 300
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
        a.stepSize = random(p.minStepSize, p.maxStepSize); // The temporary variable 'a' allows to easily edit the properties of newly created agent objects
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
    background(255, 255, 255, 3);
    stroke(0);
    strokeWeight(p.agentSize);
    noFill();
    agents.forEach(function (a) {
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}
