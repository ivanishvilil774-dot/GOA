<<<<<<< HEAD
age = int(input("შეიყვანეთ ასაკი: "))
is_student = input("სტუდენტი ხარ? (დიახ/არა): ") == "დიახ"
if age < 18:
    if is_student:
        print("20% discount")
    else:
        print("10% discount")
else:
=======
age = int(input("შეიყვანეთ ასაკი: "))
is_student = input("სტუდენტი ხარ? (დიახ/არა): ") == "დიახ"
if age < 18:
    if is_student:
        print("20% discount")
    else:
        print("10% discount")
else:
>>>>>>> 142c6cee86a4cd45b1d21ddad0427e46a779b378
    print("Regular price")