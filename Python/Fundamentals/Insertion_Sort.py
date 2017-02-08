def insertionSort(arr):
    for i in xrange(0, len(arr)-1):
        j = i + 1
        while j > 0:
            if arr[j] > arr[j-1]:
                break
            arr[j], arr[j-1] = arr[j-1], arr[j]
            j -= 1
    return arr

print insertionSort([2, 6, 3, -1, 8, 0])
print insertionSort([5, 4, 3, 2, 1])
