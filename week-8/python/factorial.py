def factorial(num):
    counter = num - 1
    if (counter == 1):
        return num
    result = num * factorial(counter)
    return result


my_num = 6

print(factorial(my_num))
