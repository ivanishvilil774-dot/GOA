def filter_vowels(input_string):
    vowels = "aeiouAEIOU"  
    filtered_vowels = ""

    for char in input_string:
        if char in vowels:
            filtered_vowels = filter_vowels +  char  

    return filtered_vowels  
input_str = "Hello World"
print(filter_vowels(input_str)) 
