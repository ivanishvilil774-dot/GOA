text = input("Enter a string: ")

index = 0
for leter in text:
    if index %2 == 0:
        print(leter)
    index = index + 1

print()