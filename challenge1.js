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

// let password = '01234Paul'
let password = '01234Pauo'
let username = 'Paul'

// F checks if password is over 8 chars long, returns true if it is.
function testPasswordLength () {
    if (password.length > 7) {
        return true;
    }
    else {
        return false;
    }
}

// F checks if password contains spaces, returns true if it does not.
function testPasswordSpaces () {
    if (!password.includes(' ')) {
        return true;
    }
    else {
        return false;
    }
}

// F checks if password contains username, returns true if it does not.
function testPasswordForUsername () {
    if (!password.includes(username)) {
        return true;
    }
    else {
        return false;
    }
}

function isValidPassword (password, username) {
    if (testPasswordLength(password) && testPasswordSpaces(password) && testPasswordForUsername(password, username)) {
        return true;
    }
    else {
        return false;
    }
}

function userReply() {
    if (isValidPassword(password, username)) {
        console.log('All good!');
    }
    else {
        console.log('Password is invalid.')
    }
}

function run() {
    userReply();
}