fruits = ['apple', 'banana', 'cherry']

remove_fruits = input("enter a index to dilist fruit: ")

if remove_fruits == "1":
    fruits.remove(fruits[0])
elif remove_fruits == "2":
    fruits.remove(fruits[1])
elif remove_fruits == "3":
    fruits.remove(fruits[2])

print("Updated list of fruits:", fruits)