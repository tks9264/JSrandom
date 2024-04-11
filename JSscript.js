let heading= document.getElementById("title");
let executeButton= document.getElementById("executeButton");
let outputParagraph= document.getElementById("outputText");
let inputElement= document.getElementById("myInput");

let times = ["Yellow Ochre" ,"Phalo Blue", "Ivory Black", "Raw Sienna", "Cadmium Red"];

executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
	//restyle();

	//demonstrateFunction();
});

function generate(incUserInput){
	let randomIndex = Math.floor(Math.random() * times.length);
	console.log(randomIndex);
	let selectedRandomTimeText = times[randomIndex];
	outputParagraph.innerText = "The color for a " +  incUserInput + " is " + selectedRandomTimeText;

function restyle(){

}
}