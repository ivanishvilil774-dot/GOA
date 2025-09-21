#append() 
def append_without_append(my_list, item):
    my_list += [item]
    return my_list
my_list = [1, 2, 3]
new_item = 4
updated_list = append_without_append(my_list, new_item)
print(updated_list)

#pop()
def append_without_append(my_list, remove_index):
    my_list -= [remove_index]
    return my_list
my_list = [1, 2, 3]
remove_index = 1
updated_list = append_without_append(my_list, new_item)
print(updated_list)
