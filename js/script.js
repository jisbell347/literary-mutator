/***************************************
 ROT 13 Encryption
 **************************************/

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
		let upper = (letter === letter.toUpperCase());
		//else store it to the letter variable as lowercase
		letter = letter.toLowerCase();

		// grabs the index number of the letter in the alphabet variable and stores it to index variable
		let index = alphabet.indexOf(letter);
		// if index of the character is equal to -1, add it to the newSentence variable without offsetting it - i.e. spaces.
		if(index === -1) {
			newSentence += letter;
			//else add the offset to the index value then add the length of the alphabet variable.
		} else {
			index = ((index + letterOffset) + alphabet.length);
			//store the offset in the nextLetter variable
			let nextLetter = fullAlphabet[index];
			//if the nextLetter value is uppercase keep it uppercase
			if(upper) nextLetter = nextLetter.toUpperCase();
			//add the letter to the newSentence variable and repeat from the start of the loop.
			newSentence += nextLetter;
		}
	}
	// Finally, once the loop is finished return the value stored in newSentence and display it as text on the document object under the encryptedSentence Id.
	document.getElementById("encryptedSentence").innerText = newSentence;
}

/*******************************************
 Find and Replace
 ******************************************/
function replaceWords(){
	// grab the text inside the tag with the starTrek id.
	let oldWords = document.getElementById("starTrek").textContent;
	// create an object of words that we want to replace.
	let words = {
		"Data": "Skywalker",
		"Borg": "Stormtrooper",
		"Enterprise": "Death Star",
		"Captain": "Darth Vader",
		"Computer": "C3PO",
		"Federation": "Empire"
	};
	// Replace the words using the global and local regular expressions with the values assigned in the words object and store in the newWords variable..
	oldWords = oldWords.replace(/Data|Borg|Enterprise|Captain|Computer|Federation/gi, function(matched) {
		return words[matched];
	});
// Return the value of newWords variable and display it on the page in the tag with the starWars Id
	document.getElementById("starWars").innerHTML = oldWords
}

/**********************************
 Highlight a Word
 **********************************/
function highlightSearch() {
	let text = document.getElementById("search").value;
	let query = new RegExp("(\\b" + text + "\\b)", "gim");
	let highlight = document.getElementById("highlighted").innerHTML;
	let wordsToHighlight = highlight.replace(/(<span>|<\/span>)/igm, "");
	document.getElementById("highlighted").innerHTML = wordsToHighlight;
	let words = wordsToHighlight.replace(query, "<span>$1</span>");
	document.getElementById("highlighted").innerHTML = words;

}
