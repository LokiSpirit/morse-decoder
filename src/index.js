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

function decode(expr) {
let result = [];
let str ="";
let slice = "";
    for(let i=0; i<expr.length;i=i+2){
        slice = expr.slice(i,i+2);
      switch(slice){
        case "00": 
        break;
        case "**": str =" ";
            break;
        case "10": str +=".";
            break;
        case "11": str +="-";
            break;
        default: return;
      }
      if(i % 10 == 8){
        result[Math.floor(i/10)] = str;
        str = "";
      }
    }
    let phrase = "";
        for(let word of result){
            if(word ===" "){
                phrase += word;
            }else{
                phrase += MORSE_TABLE[word];
            }
        }
        return phrase;
    }


module.exports = {
    decode
}