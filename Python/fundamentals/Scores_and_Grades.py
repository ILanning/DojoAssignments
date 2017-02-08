import random

def genScore():
    rand = int(random.random() * 41 + 60)
    grade = "D"
    if rand > 90:
        grade = "A"
    elif rand > 80:
        grade = "B"
    elif rand > 70:
        grade = "C"
    print "Score: {}; Your grade is {}".format(rand, grade)

print "Scores and Grades"
for i in xrange(0, 10):
    genScore()
print "End of the program. Bye!"
