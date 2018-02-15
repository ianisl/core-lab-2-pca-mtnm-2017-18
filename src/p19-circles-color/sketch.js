const p = {
    agentSize: 50,
    agentCount: 20,
    stepSize: 2,
    timeIntervalBetweenUpdates: 100
};

let agents;
let timeOfLastUpdate;

function setup() {
    pixelDensity(3);
    createCanvas(540, 540);
    agents = [];
    for (let i = 0; i < p.agentCount; i++) {
        let a = new Agent();
        a.stepSize = p.stepSize;
        a.color = color(random(255), random(255), random(255), 4);
        agents.push(a);
    }
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        for (let i = 0; i < agents.length; i++) {
            let a = agents[i];
            a.angle = random(TWO_PI);
        }
        timeOfLastUpdate = currentTime;
    }
    for (let i = 0; i < agents.length; i++) {
        let a = agents[i];
        a.updatePosition();
    }
    background(255, 0);
    noFill();
    strokeWeight(p.agentSize/10);
    for (let i = 0; i < agents.length; i++) {
        let a = agents[i];
        stroke(a.color);
        ellipse(a.position.x, a.position.y, p.agentSize);
    }
}

function keyTyped() {
    if (key === 's') {
        saveCanvas(getTimestamp(), 'jpg');
    }
}
