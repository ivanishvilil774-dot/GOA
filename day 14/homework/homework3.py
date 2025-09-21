user_info = []

# Input data
name = input("Enter your name: ")
last_name = input("Enter your last name: ")
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
email = input("Enter your email: ")
password = input("Enter your password: ")
favorite_car = input("Enter your favorite car: ")
favorite_color = input("Enter your favorite color: ")

# Append elements to the list correctly
user_info.append([name, last_name, age, height, email, password, favorite_car, favorite_color])

# Print the list
print("List:", user_info)
