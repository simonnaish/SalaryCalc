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

    if(operation!='code'){
        message=message.slice(0, message.length/3)
    }

    for (let i = 0; i < message.length; i++) {
        counter = checkCounter(counter, secretLength);
        finalTransition = SECRET_TOKEN[counter] + transition;
        if (operation == 'code') {
            converted = moveForward(charList.indexOf(message[i]), finalTransition, charListLength)
        } else {
            converted = moveBackward(charList.indexOf(message[i]), finalTransition, charListLength)
        }
        newMessage += charList[converted];
    }
    let extrasSize = message.length * 2;
    if (operation == 'code') {
        for (let i = 0; i < extrasSize; i++) {
            newMessage += charList[Math.floor(Math.random() * 9)]
        }
    }




    // message.map(letter => {
    //     counter = checkCounter(counter, secretLength);
    //     finalTransition = SECRET_TOKEN[counter] + transition;
    //     if (operation == 'code') {
    //         converted = moveForward(charList.indexOf(letter), finalTransition, charListLength)
    //     }else{
    //         converted=moveBackward(charList.indexOf(letter), finalTransition, charListLength)
    //     }
    //     newMessage+=converted;
    // });
    // console.log('newMessage'+newMessage);
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