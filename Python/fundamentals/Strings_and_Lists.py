print "--Find and Replace--"
str = "If monkeys like bananas, then I must be a monkey!"

target = "monkey"
replacement = "alligator"
targetLocations = []
start = str.find(target)
while start != -1:
    targetLocations.append(start)
    start = str.find(target, targetLocations[len(targetLocations)-1]+1)
print targetLocations
print str.replace(target, replacement)

print "\n--Min and Max--"
x = [2,54,-2,7,12,98]

if len(x) > 0:
    print min(x)
    print max(x)

print "\n--First and Last--"
y = ["hello",2,54,-2,7,12,98,"world"]

result = [0, 0]
if len(y) > 0:
    result[0] = y[0]
    result[1] = y[len(y)-1]
print result

print "\n--New List--"
z = [19,2,54,-2,7,12,98,32,10,-3,6]

z.sort()
negatives = []
while z[0] < 0:
    negatives += [z.pop(0)]
z.insert(0, negatives)
print z
