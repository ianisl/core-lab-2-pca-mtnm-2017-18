// Parameters
const p = {
    agentCount: 5,
    agentAlpha: 15,
    minStepSize: 0.2,
    maxStepSize: 2,
    timeIntervalBetweenUpdates: 1000
};
// ----------

let agents;
let timeOfLastUpdate;

function setup() {
    pixelDensity(3); // By default, the pixel density is set according to your screen. By enforcing a given pixel density, we can create images at a higher resolution (which can be used for printing).
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
    stroke(0, p.agentAlpha);
    noFill();
    beginShape();
    agents.forEach(function (a) {
        curveVertex(a.position.x, a.position.y);
    });
    if (agents.length > 3) {
        curveVertex(agents[0].position.x, agents[0].position.y);
        curveVertex(agents[1].position.x, agents[1].position.y);
        curveVertex(agents[2].position.x, agents[2].position.y);
    }
    endShape();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas(getTimestamp(), 'jpg');
    }
    if (key === 'f') {
        var isFullScreen = fullscreen();
        fullscreen(!isFullScreen);
    }
}
