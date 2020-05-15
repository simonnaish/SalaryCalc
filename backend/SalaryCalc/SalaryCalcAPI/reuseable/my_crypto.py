import string
from backend.SalaryCalc.SalaryCalcAPI.reuseable.SECRET import SECRET_TOKEN, CHAR_LIST
secret=SECRET_TOKEN;




def code_message(username, message, operation):
    new_message = ""
    transition = len(username)
    char_list = CHAR_LIST
    char_list_length = len(char_list)
    final_transition = 0
    counter=0;
    for x in message:
        while counter>len(secret)-1:
            counter=counter-len(secret)

        final_transition = secret[counter]+transition

        if operation == "code":
            converted = move_forward(
                char_list.index(x), final_transition, char_list_length - 1
            )
        else:
            converted = move_backward(
                char_list.index(x), final_transition, char_list_length - 1
            )

        new_message += char_list[converted]
    print(new_message)

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
    return start;QC9HoA9NwCAsy


a=code_message('adminek','Co tam?','code')
b=code_message('adminek',a,'decode')