let myText;
let pixValsTextObj;
let letters = [];
let pixelValsArr = [];
//goal: show bukowski with roll the dice. 

//loading the text

function getUserInput() {
    // Get the value of the input element and clean it up
    var userInput = document.getElementById("userInput").value.toLowerCase().replace(/[.; '-,]/g, "");
    
    // Duplicate the cleaned up user input until it's at least 10,000 characters long
    var duplicatedString = "";
    while (duplicatedString.length < 10000) {
      duplicatedString += userInput;
    }
    
    // Update myText with the duplicated string
    myText = [duplicatedString]; 
  }
 

function preload() {
	pixValsTextObj = loadStrings("pixelValuesJS.txt");
}


function setup() {
	createCanvas(1000, 1000);
	background(225);
  for (let i = 0; i < pixValsTextObj.length; i++) {
		pixelValsArr.push(pixValsTextObj[i]);
	}
}

function draw() {
  // Check if myText has been updated by getUserInput()
	if (myText) {
		// Loop over the letters in myText and draw them
		let moveRight = 5;
		let moveDown = 10;
		for (let i = 0; i < myText.length; i++) {
			let cleanText = myText[i].replaceAll(",", "")
				.replaceAll(".", "")
				.replaceAll(";", "")
				.replaceAll(" ", "")
				.replaceAll("'", "")
				.replaceAll("-", "")
				.toLowerCase();
			let localLetters = cleanText.split("");
			for (let j = 0; j < localLetters.length; j++) {
				letters.push(localLetters[j]);
			}
		}
		for (let i = 0; i < letters.length; i++) {
			if (moveRight > width) {
				moveRight = 5;
				moveDown += 10;
			}
			if (pixelValsArr[i] < 64) {
				textSize(19);
			} else if (pixelValsArr[i] > 63 && pixelValsArr[i] < 128) {
				textSize(15);
			} else if (pixelValsArr[i] > 127 && pixelValsArr[i] < 192) {
				textSize(14);
			} else if (pixelValsArr[i] > 191 && pixelValsArr[i] < 223) {
				textSize(13);
			}	else if (pixelValsArr[i] > 191 && pixelValsArr[i] < 239) {
				textSize(12);
			}	else {
				textSize(10);
			}
			text(letters[i], moveRight, moveDown);
			moveRight += 10;
		}
	}
}



function keyPressed() {
	if (keyCode === ENTER) {
		getUserInput();
	}
}