<<<<<<< HEAD
num = int(input("Enter a number: "))

if num <= 1:
    print(str(num) + " არ არის მარტივი რიცხვი.")
else:
    is_prime = True

    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        print(str(num) + " არის მარტივი რიცხვი.")
    else:
        print(str(num) + " არ არის მარტივი რიცხვი.")
=======
num = int(input("Enter a number: "))

if num <= 1:
    print(str(num) + " არ არის მარტივი რიცხვი.")
else:
    is_prime = True

    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        print(str(num) + " არის მარტივი რიცხვი.")
    else:
        print(str(num) + " არ არის მარტივი რიცხვი.")
>>>>>>> 142c6cee86a4cd45b1d21ddad0427e46a779b378
