let executeButton = document.getElementById('executeButton');
let resultsElements = document.getElementById('results');
let namesElements = document.getElementById('names');
let imageElements = document.getElementById("outputImage");
let titleElement = document.getElementById('title'); 
let pageBodyElement = document.getElementById('pageBody');

let calculations = [" are a Match Made in Heaven", " Should Block Each Other on EVERYTHING", " should Date i guess, #CanonEvent", " should pull a Romeo & Juliet", " are ... oh no baby ... just run."];
let matchingImage =["./hellokittymeme.jpg",        "./block.jpg",                            "./axe.jpg",                         "./roomtour.jpg",                "./funne.jpg"];


executeButton.addEventListener("click", function(){
	
	let currentInputText = namesElements.value;
	generate(currentInputText);
	restyle();
	changeTitleAndBackground();

});

function generate(incUserInput) {
	let randomIndex = Math.floor(Math.random() * calculations.length);
	console.log(randomIndex);
	let selectedRandomCalculationsText = calculations[randomIndex];
	resultsElements.innerText = "You and " + incUserInput + selectedRandomCalculationsText;
	imageElements.src = matchingImage[randomIndex];
}

function restyle() {
  
  let colors = ['#FF69B4', '#00FA9A', '#8A2BE2', '#20B2AA', '#FFD700'];
  let fontSizes = ['15px', '20px', '25px', '30px', '35px']; 
  let letterSpacings = ['normal', '1px', '2px', '3px', '4px'];

  resultsElements.style.color = colors[Math.floor(Math.random() * colors.length)];
  resultsElements.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
  resultsElements.style.letterSpacing = letterSpacings[Math.floor(Math.random() * letterSpacings.length)];
}


function changeTitleAndBackground() {
  	titleElement.style.color = 'rgb(255, 250, 160)'; 
  	pageBodyElement.style.backgroundColor = '#D8BFD8';
}