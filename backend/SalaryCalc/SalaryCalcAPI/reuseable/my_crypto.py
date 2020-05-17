import string
import random

from .SECRET import SECRET_TOKEN, CHAR_LIST

secret = SECRET_TOKEN


def code_message(username, message, operation):
    new_message = ""
    transition = len(username)//3
    char_list = CHAR_LIST
    char_list_length = len(char_list)
    final_transition = 0
    counter = 0
    if(operation!='code'):
        message=message[:len(message)//3];
        # print('message!!!'+message)
    for x in message:
        while counter > len(secret) - 1:
            counter = counter - len(secret)
        # print('x:  '+x )
        final_transition = secret[counter] + transition

        if operation == "code":
            converted = move_forward(
                char_list.index(x), final_transition, char_list_length - 1
            )
        else:
            converted = move_backward(
                char_list.index(x), final_transition, char_list_length - 1
            )
        # print('afterC:  '+char_list[converted])
        new_message += char_list[converted]
    if(operation=='code'):
        for x in range(0, len(message)*2):
            new_message+=char_list[random.randint(0, char_list_length-1)]
    # print('final'+new_message)

    return new_message


def move_forward(start, transition, max_idx):
    start += transition
    while start > max_idx:
        start = start - max_idx
    return start


def move_backward(start, transition, max_idx):
    start -= transition
    while start < 0:
        start = start + max_idx
    return start


print(code_message('admin','admin','code'))
print(code_message('admin','2629383439','decode'))
