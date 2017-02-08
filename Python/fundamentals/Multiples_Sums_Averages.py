print "--Multiples 1--"

for i in xrange(1, 1000, 2):
    print i

print "--Multiples 2--"

for i in xrange(5, 1000001, 5):
    print i

print "--Sum List--"
a = [1, 2, 5, 10, 255, 3]

sum = 0
i = 0
for i in xrange(0, len(a)):
    sum += a[i]
print sum

print "--Average List--"
average = 0.0
i = 0
for i in xrange(0, len(a)):
    average += a[i]
print average / len(a)
