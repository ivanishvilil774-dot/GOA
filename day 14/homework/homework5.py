
names = []

for i in range(5):
    name = input("Enter name: ")
    names.append(name)

for name in names:
    if len(name) > 5:
        print(str(name) + ": The name consists of five or fewer letters.")
