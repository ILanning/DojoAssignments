print "--Odd or Even--"

def odd_even():
    for i in xrange(1, 2001):
        if i % 2 == 1:
            print "Number is {}.  This is an odd number.".format(i)
        if i % 2 == 0:
            print "Number is {}.  This is an even number.".format(i)

odd_even()

print "\n--Multiply--"

def multiply(list, multiple):
    result = [0] * len(list)
    for i in xrange(0, len(list)):
        result[i] = list[i] * multiple
    return result

print multiply([2, 4, 10, 16], 5)

print "\n--Layered Multiples--"

def layered_multiples(arr):
    result = [1] * len(arr)
    for i in xrange(0, len(arr)):
        result[i] = [1] * arr[i]
    return result

print layered_multiples(multiply([2, 4, 5], 3))
