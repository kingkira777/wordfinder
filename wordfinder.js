const dictionary = ['cold', 'wind', 'snow', 'chill'];
const matrix = ['absc','cold','loud','wind','can','sing'];

//Technical Exercise -- Word Finder Task


// Without Functions =======================================================
console.log("=================Without Functions===================================");
var word_arr = [];
for(var key in dictionary){
    matrix.find((word)=>{
        if(word == dictionary[key]){
            word_arr.push(word);
        }
    });
}
console.log(word_arr);





//With function=======================================================
console.log("=========================W/ Function=================================");
let findWord = (dictionary, matrix)=>{
    var words = [];
    for(var key in dictionary){
        matrix.find((word)=>{
            if(word == dictionary[key]){
                words.push(word);
            }
        });
    }
    return words;
}

var words = findWord(dictionary,matrix);
console.log(words);

