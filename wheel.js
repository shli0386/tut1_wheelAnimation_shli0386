class Wheel {
  constructor(x, y, baseRadius) {
    this.x = x;
    this.y = y;
    this.baseRadius = baseRadius;

    // Initial state
    this.radius = 0;
    this.targetRadius = 0;
    this.angle = random(360);
    this.rotationSpeed = random(0.2, 1.5);

    // Time-based behavior
    this.appearDelay = int(random(1000, 5000)); // Delay before entering screen
    this.appeared = false;
    this.appearTime = 0;
    this.lifeClock = 0;
    this.state = 0; // 0 = hidden, 1 = active, 2 = fading
    this.reactivatedAt = -99999;

    // Visual dynamics
    this.opacity = 255;
    this.pulseScale = 1;
    this.shapeDeform = 1;

    // Color palette
    this.colors = Array.from({ length: 7 }, () => randomColor());
    this.pinkRingColor = randomColor();
    this.yellowSpikesColor = randomColor();
    this.outerCircleColor = randomColor();
    this.dotColor = randomColor();
    this.dotBgColor = randomColor();
    this.finalCircleColor = randomColor();
    this.curvedLineColor = randomColor();
  }

  update() {
    const elapsed = millis();

    // Handle initial appearance
    if (!this.appeared && elapsed > this.appearDelay) {
      this.appeared = true;
      this.appearTime = elapsed;
      this.state = 1;
    }

    if (!this.appeared) return;

    // Track time since appearance
    this.lifeClock = elapsed - this.appearTime;

    // Switch to fading state after 8 seconds
    if (this.state === 1 && this.lifeClock > 8000) this.state = 2;

    // Rotation
    if (this.state === 1) {
      this.angle += this.rotationSpeed;
    } else if (this.state === 2) {
      this.angle += this.rotationSpeed * 0.1; // Slower rotation when fading
    }

    // Breathing scale & horizontal deformation
    this.pulseScale = 1 + 0.08 * sin(elapsed * 0.004);
    if (this.state === 2) this.shapeDeform = 1.3;
    else this.shapeDeform = 1;

    // Hover interaction: revive faded wheels
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.radius) {
      this.reactivatedAt = elapsed;
      this.state = 1;
    }

    // Radius & opacity adjustments based on state
    if (this.state === 1) {
      this.targetRadius = this.baseRadius * this.pulseScale;
      this.opacity = lerp(this.opacity, 255, 0.1);
    } else if (this.state === 2) {
      this.targetRadius = this.baseRadius * 0.6;
      this.opacity = lerp(this.opacity, 50, 0.02);
    }

    this.radius = lerp(this.radius, this.targetRadius, 0.2);
  }

  display() {
    if (!this.appeared) return;

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    angleMode(DEGREES);
    tint(255, this.opacity); // Control overall transparency
    scale(this.shapeDeform, 1); // Horizontal deformation

    // Central concentric circles
    noStroke();
    let radii = [this.radius * 0.37, this.radius * 0.32, this.radius * 0.27, this.radius * 0.22, this.radius * 0.17, this.radius * 0.12, this.radius * 0.07];
    for (let i = 0; i < this.colors.length; i++) {
      fill(this.colors[i]);
      ellipse(0, 0, radii[i] * 2);
    }

    // Pink ring
    let pinkRadius = this.radius * 0.45;
    fill(this.pinkRingColor);
    ellipse(0, 0, pinkRadius * 2);

    // Spikes
    stroke(this.yellowSpikesColor);
    strokeWeight(2);
    let spikes = 50;
    for (let i = 0; i < spikes; i++) {
      let angle = (360 / spikes) * i;
      let x1 = cos(angle) * (pinkRadius - 6);
      let y1 = sin(angle) * (pinkRadius - 6);
      let x2 = cos(angle) * (pinkRadius + 6);
      let y2 = sin(angle) * (pinkRadius + 6);
      line(x1, y1, x2, y2);
    }

    // Outer ring
    noFill();
    stroke(this.outerCircleColor);
    strokeWeight(3);
    ellipse(0, 0, (pinkRadius + 8) * 2);

    // Dots
    let dotRings = 6;
    let initialRadius = pinkRadius + 18;
    let ringSpacing = 13;

    for (let ring = 0; ring < dotRings; ring++) {
      let currentRadius = initialRadius + ring * ringSpacing;
      let dotsNum = 80 - ring * 8;
      let dotSize = 7 - ring * 0.7;

      strokeWeight(ringSpacing - 2);
      stroke(this.dotBgColor);
      noFill();
      ellipse(0, 0, currentRadius * 2);

      strokeWeight(0);
      fill(this.dotColor);
      for (let j = 0; j < dotsNum; j++) {
        let angle = (360 / dotsNum) * j;
        ellipse(
          cos(angle) * currentRadius,
          sin(angle) * currentRadius,
          dotSize
        );
      }
    }

    // Final outer ring
    noFill();
    stroke(this.finalCircleColor);
    strokeWeight(6);
    ellipse(0, 0, (initialRadius + (dotRings - 1) * ringSpacing + 10) * 2);

    // Curved line
    stroke(this.curvedLineColor);
    strokeWeight(5);
    noFill();
    beginShape();
    vertex(0, 0);
    bezierVertex(30, -20, 60, -30, 90, -60);
    endShape();

    pop();
  }
}