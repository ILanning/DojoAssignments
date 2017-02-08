def bubbleSort(arr):
    for i in xrange(0, len(arr)):
        for j in xrange(1, len(arr)-i):
            if arr[j] < arr[j-1]:
                arr[j], arr[j-1] = arr[j-1], arr[j]
    return arr

print bubbleSort([2, 6, 3, -1, 8, 0])
print bubbleSort([5, 4, 3, 2, 1])
