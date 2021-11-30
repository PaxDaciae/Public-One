// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

let password = '01234Paul'
// let password = '01234Pauo';
let username = 'Paul';

function isValidPassword (password, username) {
    if (
        password.includes(' ') ||
        password.includes(username) ||
        (password.length < 8)
        ) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isValidPassword(password, username))