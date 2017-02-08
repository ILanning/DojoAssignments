def selectionSort(arr):
    for i in xrange(0, len(arr)):
        smallest = i
        for j in xrange(i, len(arr)):
            if arr[j] < arr[smallest]:
                smallest = j
        arr[i], arr[smallest] = arr[smallest], arr[i]
    return arr

print selectionSort([2, 6, 3, -1, 8, 0])
print selectionSort([5, 4, 3, 2, 1])
