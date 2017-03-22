/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		mouseIsPressed
		mouseButton
		mouseX, mouseY
		random(...)
		colorMode(...)
        keyPressed(...)
        key, keyCode

	Color picker: http://alloyui.com/examples/color-picker/hsv/

	See index.html for disabling the right click menu.
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Fill the canvas with a color before we start drawing
	background(250, 180, 200);

//Switch to HSB mode, the maxes are:
//hue = 360
//saturation = 100
//bright = 100
// alpha = 1
	//colorMode(HSB, 360, 360, 100, 100, 1);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
		console.log(mouseIsPressed);
		if (mouseIsPressed){
			if (mouseButton === LEFT){
				fill(random(0, 255), 0, 150); //randomize colors for depth
				stroke(5);
				rect(mouseX, mouseY, 30, 30);
				rect(mouseX, height - mouseY, 30, 30); //flip horizontally
		} else if (mouseButton === CENTER){
				background(250, 180, 200);
		} if (mouseButton === RIGHT){
				//noStroke();
				fill(0, 190, random(100, 255)); //can add a fourth number for transparency below 1
				//ellipse(mouseX, mouseY, 25);
				//ellipse(width - mouseX, mouseY, 25); //flip vertically
				//ellipse(width - mouseX, height - mouseY, 25); //flip both

				stroke(10, random(20, 100), 100);
				// x1, y1, x2, y2
				line(mouseX, mouseY, width - mouseX, height- mouseY);
		}
		}
}

// keyPressed is another function built into p5. Any code you put inside of
// keyPressed is run whenever a key on the keyboard is pressed.
function keyPressed() {
		console.log(key);
		if (key === "S"){
			saveCanvas("screenshot", "png");
		}
}
