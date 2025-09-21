gest_to_nummber = 3
user_number = int(input("enter a number: "))

while gest_to_nummber != user_number:
    print("Sorry, the nummber you gessed is wrong try again: ")
    user_number = int(input("enter a number"))
else:
    print("Congratulations! You guessed it right.")