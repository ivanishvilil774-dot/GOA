numbers = []

for i in range(10):
    num = int(input("Enter a number: "))  
    numbers.append(num)
    
for num in numbers:
    if num % 2 == 0:
        print(str(num) + " - ლუწი რიცხვია")
    else:
        print(str(num) + " - კენტი რიცხვია")
