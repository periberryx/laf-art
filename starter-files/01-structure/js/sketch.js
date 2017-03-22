/*
	Let's create some shapes with p5. Ellipses, rectangles, lines, oh my.

	Check out the p5 reference page: http://p5js.org/reference. See the
	structure, shape and color sections.

	p5 structure:
		setup(), draw()

	p5 global functions:
		createCanvas(...)
		background(...)
		fill(...), noFill(...)
		stroke(...), noStroke(...), strokeWeight(...)
		ellipse(...), rect(...)

	p5 global variables:
		windowWidth, windowHeight
		mouseX, mouseY

	Color picker: http://alloyui.com/examples/color-picker/hsv/
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
    createCanvas(800, 600);
    background(150, 0, 250);

    fill(200, 0, 0);   //shape color
    stroke(0, 0, 150); //outline color
    strokeWeight(5);  //outline thickness
    ellipse(200, 400, 25); //to the right, down, circumference
    rect(250,400,100, 30); //width, length
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
    fill(0, 210, 250);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(mouseX, mouseY, 20);

    //strokeWeight(20);
    //line(pmouseX, pmouseY, mouseX, mouseY);
}
