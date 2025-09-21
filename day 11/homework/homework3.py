username = "123@gmail.com"
password = "1234"
user_username = input("Enter your email: ")
user_password = input("Enter your password: ")
while user_password != password or user_username != username:
    print("Incorrect credentials. Try again.")
    user_username = input("Please enter your Email: ")
    user_password = input("Please enter your Password: ")
print("Welcome " + user_username)
