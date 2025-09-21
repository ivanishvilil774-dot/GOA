def even_numbers():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    even_nums = []
    for num in numbers:
        if num % 2 == 0:
            even_nums.append(num)
    return even_nums

print(even_numbers())