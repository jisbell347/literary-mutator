//Variables that contains the full Roman alphabet minus special characters and numbers
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fullAlphabet = alphabet + alphabet + alphabet;

//function to encode the string
function rot13() {
	//grabs the data from the ID and stores it to encrypt
	let encrypt = document.getElementById("encrypt").textContent;
	// variable that states how many characters to offset the target data
	let letterOffset = 13;
	letterOffset = (letterOffset % alphabet.length);
	//New sentence which will store the characters after offsetting them by 13. Initially an empty string
	let newSentence = '';

	//runs a for loop on the encrypt text value and stores each character to the letter variable.
	for(let i=0; i<encrypt.length; i++) {
		let letter = encrypt[i];
		// if letter is Uppercase, store it to the upper variable as uppercase
		let upper = (letter == letter.toUpperCase());
		//else store it to the letter variable as lowercase
		letter = letter.toLowerCase();
	}
}