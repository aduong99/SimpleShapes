
// Setup code goes here
function setup() {
  createCanvas(1240, 720);
  print("Starting up Simple Shapes");
  ellipseMode(RADIUS);

  print("Width = " + width);
  print("Height = " + height);

 }


// Draw code goes here
function draw() {
  background(100,200,500);

  // drawEllipses();

  drawMonster();

  drawMonster2();

  drawMonster3();
}

function drawMonster(){
  // neck
  stroke(102);
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right

  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium

  // Body
  noStroke(); // Disable stroke
  fill(0,200,50); // Set fill to green
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(200,50,50); // Set fill to red
  rect(219, 257, 90, 120); // Main body
  fill(0); // Set fill to black
  rect(219, 274, 90, 6); // Gray stripe

  // Head
  fill(0,100,555); // Set fill to blue
  ellipse(276, 155, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill(200,20,55); // Set fill to red
  ellipse(288, 150, 3, 3); // Pupil
  fill(0,200,50); // Set fill to green
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
}


function drawMonster2(){
  // neck
  stroke(102);
  line(566, 257, 566, 162); // Left
  line(576, 257, 576, 162); // Middle
  line(586, 257, 586, 162); // Right

  // Antennae
  line(576, 155, 546, 112); // Small
  line(576, 155, 606, 56); // Tall
  line(576, 155, 642, 170); // Medium

  // Body
  noStroke(); // Disable stroke
  fill(0,50,250); // Set fill to green
  ellipse(564, 377, 33, 33); // Antigravity orb
  fill(0,300,100); // Set fill to green
  rect(519, 257, 90, 120); // Main body
  fill(0); // Set fill to black
  rect(519, 274, 90, 6); // Gray stripe

  // Head
  fill(200,50,50); // Set fill to red
  ellipse(576, 155, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(588, 150, 14, 14); // Large eye
  fill(0,300,100); // Set fill to green
  ellipse(588, 150, 3, 3); // Pupil
  fill(0,50,250); // Set fill to green
  ellipse(563, 148, 5, 5); // Small eye 1
  ellipse(596, 130, 4, 4); // Small eye 2
  ellipse(605, 162, 3, 3); // Small eye 3
}

function drawMonster3(){
  // neck
  stroke(102);
  line(866, 257, 866, 162); // Left
  line(876, 257, 876, 162); // Middle
  line(886, 257, 886, 162); // Right

  // Antennae
  line(876, 155, 846, 112); // Small
  line(876, 155, 906, 56); // Tall
  line(876, 155, 942, 170); // Medium

  // Body
  noStroke(); // Disable stroke
  fill(200,50,50); // Set fill to red
  ellipse(864, 377, 33, 33); // Antigravity orb
  fill(0,100,300); // Set fill to blue
  rect(819, 257, 90, 120); // Main body
  fill(0); // Set fill to black
  rect(819, 274, 90, 6); // Gray stripe

  // Head
  fill(0,200,55); // Set fill to green
  ellipse(876, 155, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(888, 150, 14, 14); // Large eye
  fill(50,100,255); // Set fill to blue
  ellipse(888, 150, 3, 3); // Pupil
  fill(220,20,50); // Set fill to green
  ellipse(863, 148, 5, 5); // Small eye 1
  ellipse(896, 130, 4, 4); // Small eye 2
  ellipse(905, 162, 3, 3); // Small eye 3
}
