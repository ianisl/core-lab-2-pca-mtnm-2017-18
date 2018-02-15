// Parameters
const p = {
    agentSize: 2,
    stepSize: 10,
    timeIntervalBetweenUpdates: 100
};
// ----------

let agent;
let timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agent = new Agent(createVector(width/2, height/2)); // Creation of an agent
    agent.stepSize = p.stepSize; // The agent's properties can easily be modified after its creation
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    // Position update
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agent.angle = random(0, TWO_PI); // For more flexibility, the agent's angle needs to be manually updated before calling the 'updatePosition' method
    }
    agent.updatePosition();
    // Drawing
    background(255, 255, 255, 3);
    stroke(0);
    strokeWeight(p.agentSize);
    noFill();
    line(agent.previousPosition.x, agent.previousPosition.y, agent.position.x, agent.position.y);
}
