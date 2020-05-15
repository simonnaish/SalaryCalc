import { CHAR_LIST, SECRET_TOKEN } from 'src/app/reuseable/SECRET'

export function code(username: string, message, operation) {
    let newMessage = '';
    let transition = username.length;
    let charList = CHAR_LIST
    let secretLength = SECRET_TOKEN.length;
    let charListLength = charList.length;
    let finalTransition = 0;
    let counter = 0;
    let converted: number;

    message.array.forEach(letter => {
        counter = checkCounter(counter, secretLength);
        finalTransition = SECRET_TOKEN[counter] + transition;
        if (operation == 'code') {
            converted = moveForward(charList.indexOf(letter), finalTransition, charListLength)
        }else{
            converted=moveBackward(charList.indexOf(letter), finalTransition, charListLength)
        }
        newMessage+=converted;
    });
    return newMessage;
}

function checkCounter(counter: number, secretLegth: number) {
    while (counter > (secretLegth - 1)) {
        counter = counter - secretLegth;
    }
    return counter;
}

function moveForward(start, transition, max_idx) {
    start += transition
    while (start > max_idx) {
        start = start - max_idx
    }
    return start
}


function moveBackward(start, transition, max_idx) {
    start -= transition
    while (start < 0) {
        start = start + max_idx
    }
    return start
}