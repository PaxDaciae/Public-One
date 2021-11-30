// Write a function isPanagram that checks whether a string contains every letter of the alphabet.

function isPanagram(words) {
    function hasAllLetters(words) {
        let text = words.toStrn.toLowerCase();
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        console.log(text);
        for (i = 0; i < letters.length; i++ ) {
            console.log(`${letters[i]}`, text.toString().indexOf(letters[i]));
            if (text.toString().indexOf(letters[i]) === -1) {
                return false;
                }
            }
        }
    hasAllLetters(words);
    if (hasAllLetters() === false) {
        return false;
    }
    else {
    return true;
    }
}
