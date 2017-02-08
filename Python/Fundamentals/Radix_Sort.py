import math

def radix(arr, leastSignificant):
    i = 1
    done = False
    result = arr
    while not done:
        buckets = [[],[],[],[],[],[],[],[],[],[]]
        done = True
        power = math.pow(10, i)
        for value in result:
            # If any value has a number in a higher place than the one we're looking at, continue on with the while loop
            if value > power:
                done = False
            # Isolates the place value that we're currently working with, then puts the number in the corresponding bucket
            buckets[int((value % power) / (power / 10))].append(value)
        print buckets
        resultIndex = 0
        # Put the result array back together
        for bucket in buckets:
            for value in bucket:
                result[resultIndex] = value;
                resultIndex += 1
        i += 1
    return result

print "\n--Least Significant Digit--\n"

x = [2000, 53405, 23, 67, 8, 9, 0, 338, 337]
print x
print
result = radix(x, True)
print
print result
