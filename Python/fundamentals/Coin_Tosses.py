import random

heads = 0
tails = 0
for i in xrange(0, 5000):
    rand = random.random();
    if rand >= 0.5:
        heads += 1
        print "Throwing a coin... It's a head! ... Got {} head(s) so far and {} tail(s) so far".format(heads, tails)
    else:
        tails += 1
        print "Throwing a coin... It's a tail! ... Got {} head(s) so far and {} tail(s) so far".format(heads, tails)
print "Ending the program, thank you!"
