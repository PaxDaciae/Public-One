// Write a function isPanagram that checks whether a string contains every letter of the alphabet.

function isPanagram(words) {
    let text = words.toLowerCase();
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log(text);
    let panagram = true
    for (i = 0; i < letters.length; i++ ) {
        console.log(`${letters[i]}`, text.toString().indexOf(letters[i]));
        if (text.toString().indexOf(letters[i]) === -1) {
            return panagram = false;
        }
    }
    return panagram;
}