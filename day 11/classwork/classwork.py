total = 0  # საერთო ჯამი
count = 10  # რაოდენობა

for _ in range(count):
    user_number = int(input("Enter a number: "))
    total += user_number  # ვამატებთ მომხმარებლის შეყვანილ რიცხვს ჯამში

average = total // count  # საშუალო არითმეტიკული (მთელი რიცხვი)
print("Average:", average)
