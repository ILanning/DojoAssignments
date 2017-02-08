def makeChange(value):
    denominations = ((1.0, "dollars"), (0.5, "half-dollars"), (0.25, "quarters"), (0.1, "dimes"), (0.05, "nickels"), (0.01, "pennies"))
    result = {}
    for i in xrange(0, len(denominations)):
        removedValue = (value - value % denominations[i][0])
        if removedValue != 0:
            result[denominations[i][1]] = int(removedValue / denominations[i][0])
            value -= removedValue
    return result

print makeChange(3.87)
