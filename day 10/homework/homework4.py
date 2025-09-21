password = "1234"

u_password = input("Enter your password: ")

while u_password != password:
    print("Incorrect password. Try again.")
    u_password = input("Enter your password: ")

print("Your password is correct.")
