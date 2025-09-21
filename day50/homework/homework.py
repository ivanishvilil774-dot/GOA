def sort_array(source_array):
    # Extract all odd numbers from the source array
    odd_numbers = [num for num in source_array if num % 2 != 0]
    
    # Sort the list of odd numbers in ascending order
    odd_numbers.sort()
    
    # Create an iterator for the sorted odd numbers
    odd_index = iter(odd_numbers)
    
    # Build the result list
    result = []
    for num in source_array:
        if num % 2 != 0:
            # If the number is odd, replace it with the next sorted odd number
            result.append(next(odd_index))
        else:
            # If the number is even, keep it in its original position
            result.append(num)

    return result
