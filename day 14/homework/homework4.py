# ცარიელი სიის შექმნა
numbers = []

for i in range(10):
    num = int(input("Enter number: "))
    numbers.append(num)

for num in numbers:
    if num % 2 == 0:
        print(str(num) + "is even")
    else:
        print(str(num) +  "is odd")
