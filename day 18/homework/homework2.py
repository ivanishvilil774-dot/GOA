
#apppend() e.g:

# Create a list of fruits
fruits = ['apple', 'banana', 'cherry']
# Add 'orange' to the end of the list
fruits.append("orange")
print(fruits) 

#pop()e.g:

# Create a list of fruits
fruits = ['apple', 'banana', 'cherry']
# remove 'banana' from the list
fruits.pop(1)
print(fruits)

#sort() e.g:

# Create a list of numbers
cars = [1, 1, 2]
#sorts the list in ascending order
cars.sort()
print(cars)

#remove() e.g:

#Create a list of fruits
fruits = ['apple', 'banana', 'cherry']
#remove 'banana' from the list
fruits.remove("banana")

#insert() e.g:

# Create a list of fruits with three items
fruits = ['apple', 'banana', 'cherry']

# Insert 'orange' at index 1 (second position in the list)
# This will push 'banana' and 'cherry' one position to the right
fruits.insert(1, "orange")
print(fruits)



#count() e.g:
#Create a list of fruits
fruits = ['apple', 'banana', 'cherry', 'cherry', 'banana'] 
# Count how many times 'cherry' appears
count_cherry = fruits.count('cherry')                       
print(count_cherry)                                     


#clear() e.g:


# Create a list of fruits
fruits = ['apple', 'banana', 'cherry', 'orange']  
# Remove all items from the list, making it an empty list
fruits.clear() 
