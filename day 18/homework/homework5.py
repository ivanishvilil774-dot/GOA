num_list = [1, 2, 3, 4, 5]

# Check if user wants to clear the list

clear_list = input("Do you want to clear the list? (yes/no): ")

if clear_list == "yes":
    num_list.clear()
    print("List cleared successfully.")
else:
    print(num_list)