def pushFront(arr, value):
    arr.append(value)
    i = len(arr) - 1
    while i > 0:
        arr[i-1], arr[i] = arr[i], arr[i-1]
        i -= 1
    return arr

print pushFront([2, 3, 4, 5], 1)
