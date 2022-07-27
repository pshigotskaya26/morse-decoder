const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/*Create an array of Pairs, where every pair is an array of ten elements*/
let getPairsOfTenNumbs = (arrStr) => {
	let arrOfPairsOfTen = [];
	let stepTen = 0;

    for (let i = 0; i < arrStr.length; i++) {
    	stepTen = stepTen + 10
    	let pairTen = arrStr.slice(i, stepTen);
    	arrOfPairsOfTen.push(pairTen);
    	i = i + 9;
    }
    return arrOfPairsOfTen;
};

/*Create an array of Pairs, where every pair is an array in which every element consists of two values*/
let getPairsOfTwoNumbs = (elem) => {
	let arrOfPairsOfTwo = [];
	let stepTwo = 0;

	for (let j = 0; j < elem.length; j ++) {
		stepTwo = stepTwo + 2;
		let pairTwo = elem.slice(j, stepTwo);
		arrOfPairsOfTwo.push(pairTwo.join(''));
		j = j + 1;
	}
	return arrOfPairsOfTwo;
	 
};

/*replace every element on dot or dash or space*/
let preplaceOnDotAnDash = (el) => {
	let newArrOfArrofTwoPairs = [];
    let countOfSpaces = 0;

    el.forEach(item => {
    	if (item === '10') {
    		item = '.';
    		newArrOfArrofTwoPairs.push(item);
    	}

    	else if (item === '11') {
    		item = '-';
    		newArrOfArrofTwoPairs.push(item);
    	}

    	else if (item === '**') {
    		countOfSpaces = countOfSpaces + 1;
    		if (countOfSpaces === 1) {
    			item = ' ';
    			newArrOfArrofTwoPairs.push(item);
    		}	
    	}
    });
    return newArrOfArrofTwoPairs;
}

function decode(expr) {
    let str = expr;
    let countOfPairs = str.length / 10;
    let arrFromStr = str.split('');
  	let arrOfPairsOfTen = getPairsOfTenNumbs(arrFromStr);
    let arrOfArrofTwoPairs = arrOfPairsOfTen.map(item => {
    	item = getPairsOfTwoNumbs(item);
    	return item;
    }); 

    let arrOfDotsDashes = arrOfArrofTwoPairs.map(elem => {
    	elem = preplaceOnDotAnDash(elem);
    	return elem;
    });

    /*create string from elements of an array*/
   	let arrOfDotsDashesJoin = arrOfDotsDashes.map(elem => {
   		elem = elem.join('');
   		return elem;
   	});

   /*decode morse simbols*/
    let arrDecodeMorse = arrOfDotsDashesJoin.map(elem => {
    	for (let key in MORSE_TABLE) {
    	 	if (elem === key) {
    	 		elem = MORSE_TABLE[key];
    	 	}
    	}
    	return elem;
    });

    /*get string from decode morse simbols*/
    let result = arrDecodeMorse.join('');
    return result;
}

module.exports = {
    decode
}