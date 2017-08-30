var paragraph = "3 ways your online shopping impacts the environment. E-commerce can lead to more trucks on the road and more greenhouse gas.";
var listOfCutWords = ["which", "after", "with", "for", "despite", "simply"];
var cutWords;
var lengthOfText = paragraph.length;
var chunkArray;
var sentenceArray;
var timingArray;
var count;


// Takes a string in paragraph form and splits it up into coherent segments using helper functions:
// First it calls a function that takes the given text and creates an array of all the sentences in the paragraph
// Then it calls a helper function which loops over every sentence and makes segments
function splitSentences() {
	chunkArray = [];
	timingArray = [];
	var text = document.getElementById("textField").value;
	console.log(text);
	var array = sentenceSplits(text);
	//setTiming(array);
    var numberOfSentences = array.length;
    var i = 0;
    while (i < numberOfSentences) {
    	splitSentencesHelper(array[i]);
    	i++;
    }
    outputChunks();
}


// Takes a paragraph and pushes each segment to an array based off of period locations. Does not account for the possible
// use of a period for an inital or other use cases.
function sentenceSplits(text) {
	sentenceArray = text.split(". ")
	for (var i = sentenceArray.length - 2; i >= 0; i--) {
		sentenceArray[i] = sentenceArray[i] + ".";
	}
	return sentenceArray;
}

// Directs the path of the sentence to check against specific parameters
function splitSentencesHelper(sentence) {
	if (countWords(sentence)<=12) {
		chunkArray.push(sentence);
	}
	else if (hasConjuction(sentence)) {
		splitBeforeConjuction(sentence);
	}
	else if (hasComma(sentence)) {
		splitAfterComma(sentence);
	}
	else if (hasCutWord(sentence)) {
		splitBeforeCutWord(sentence);
	}
	else {
		chunkArray.push(sentence);
	}
}

// Counts the number of words in the given sentence.
function countWords(sentence) {
	var sentenceWords = sentence.split(" ");
	return sentenceWords.length;
}

// Checks if the given sentence has a conjuction and returns a boolean. Right now it only checks for 'but' and 'and'
function hasConjuction(sentence) {
	var andSplit = sentence.split(" and ");
	if (sentence.indexOf("and") !== -1 || sentence.indexOf("but") !== -1) {
		if (isThisAndList(andSplit)) {
			return false;
		}
		else {
			return true;
		}
	}
	else {
		return false;
	}
}

// Checks if the given sentence has any commas. Makes sure that it isnt part of a list though.
function hasComma(sentence) {
	count = 0;
	if (sentence.indexOf(",") !== -1) {
		var commaSplit = sentence.split(", ");
		var afterCommaSplit = commaSplit[1].split(" ");
		if (commaSplit.length>2) {
			return true;
		}
		else if (commaSplit[0].split(" ").length < 4 && commaSplit[1].split(" ").length < 4) {
			return false;
		}
		else {
			return true;
		}
	}
}

function hasCutWord(sentence) {
	cutWords = [];
	for (var i = listOfCutWords.length - 1; i >= 0; i--) {
		if (sentence.indexOf(listOfCutWords[i] + " ") != -1) {
			cutWords.push(listOfCutWords[i])
		}
	}
	if (cutWords.length > 0) {
		return true;
	}
	else {
		return false;
	}
}

// Checks the different parts of the agiven array for the number of words in each part with the hopes of
// deducing if the words are part of a list
function isThisAndList(array) {
	var andSplitLength = array.length
	var i = 0;
	while (i<andSplitLength) {
		var segmentOfWords = array[i].split(" ")
	    if (segmentOfWords.length < 3) {
	    	return true
	    }
	    i++;
	}
}

// Splits the sentence before the conjuction if the conjuction is at least the fifth word in the sentence
function splitBeforeConjuction(sentence) {
	var sentenceWords = sentence.split(" ")
	if (sentenceWords.indexOf("and") >= 5) {
		var position = sentenceWords.indexOf("and");
		formSegment(sentenceWords.slice(0, position));
		formSegment(sentenceWords.slice(position, sentenceWords.length));
	}
	else if (sentenceWords.indexOf("but") >= 5) {
		var position = sentenceWords.indexOf("but");
		formSegment(sentenceWords.slice(0, position));
		formSegment(sentenceWords.slice(position, sentenceWords.length));
	}
	else {
		chunkArray.push(sentence);
	}
}

// Takes a sentence and splits it after the comma in the sentence, making two different segments which are pushed
// to the segment array
function splitAfterComma(sentence) {
	var commaSplit = sentence.split(", ");
	if (commaSplit.length > 2) {
		for (var i = 0; i <= commaSplit.length - 1; i++) {
	        if (commaSplit[i].split(" ").length < 5 && i!==(commaSplit.length - 1)) {
	        	commaSplit[i+1] = commaSplit[i] + ", " + commaSplit[i+1];
                commaSplit.splice(i, 1);
			}
		}
		if (commaSplit.length === 2) {
			chunkArray.push(commaSplit[0] + ", ");
			chunkArray.push(commaSplit[1]);
		}
	}
	else {
		var firstSegment = commaSplit[0] + ",";
		chunkArray.push(firstSegment);
		chunkArray.push(commaSplit[1]);
	}
}

function splitBeforeCutWord(sentence) {
	var lowest = [];
	if (cutWords.length > 1) {
		var cutWordSplit = sentence.split(" ");
		if (cutWordSplit.indexOf((cutWords.length - 1)) >=5 ) {
			lowest = [cutWords[(cutWords.length - 1)], cutWordSplit.indexOf((cutWords.length - 1))];
		}
		for (var i = cutWords.length - 2; i >= 0; i--) {
			var index = cutWordSplit.indexOf(cutWords[i]);
			if (index >= 5) {
				index<lowest[1] && (lowest=[cutWords[i], index]);
			}
		}
		if (lowest.length != 0) {
			var aaa = sentence.split(lowest[0]);
			if (aaa.length === 2) {
				chunkArray.push(aaa[0]);
				chunkArray.push(aaa[1]);
			}
			else {
				chunkArray.push(sentence);
			}
		}
	}
	else {
		var cutWordSplit = sentence.split(cutWords[0]);
		if (cutWordSplit.length === 2) {
			if (cutWordSplit[0].split(" ").length >= 5 && cutWordSplit[1].split(" ").length >= 5) {
				chunkArray.push(cutWordSplit[0]);
				chunkArray.push(cutWords[0] + cutWordSplit[1]);
			}
		}
		else {
			chunkArray.push(sentence);
		}
	}
}

// Takes an array of words and creates a single string segment from the array. It then pushes the segment to the
// array with the rest of the segments.
function formSegment(segmentArray) {
    var segmentLength = segmentArray.length;
    var firstWordToSegment = segmentArray[0] + " ";
    for (var i = 1; i < (segmentLength-1); i++) {
    	firstWordToSegment = firstWordToSegment + segmentArray[i] + " ";
    }
    var wholeSegment = firstWordToSegment + segmentArray[(segmentLength-1)];
    chunkArray.push(wholeSegment);
}


function setTiming(array) {
	var wpm = 180;
	var word_length = 5;
	var delay = 1500;
	var bonus = 1000;

	for (var i = 0; i < array.length; i++) {
		var words = (countWords(array[i]));
		var words_time = ((words/wpm) * 60) * 1000;
		var total_time = Math.round((delay + words_time + bonus)/1000);
		timingArray.push(total_time);
	}
}

function outputChunks() {
	var textOutput;
	document.getElementById('textField').value = '';
	for (var i = 0; i < chunkArray.length; i++) {
		if (i === 0) {
			textOutput = chunkArray[i];
			if (chunkArray.length === 1) {
				document.getElementById('textField').value = textOutput;
			}
		}
		else {
			textOutput = textOutput + '\n \n' + chunkArray[i];
			if (i === (chunkArray.length-1)) {
				document.getElementById('textField').value = textOutput;
			}
		}
	}
}
