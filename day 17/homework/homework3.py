def double_values():
    list = [1, 2, 3, 4, 5]
    for i in range(len(list)):
        list[i] = list[i] **  2
    return list

print(double_values())