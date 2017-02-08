print "--Part 1--"
x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(arr):
    for i in xrange(0, len(arr)):
        print "*" * x[i]

draw_stars(x)

print "--Part 2--"
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars2(arr):
    for i in xrange(0, len(arr)):
        if isinstance(x[i], basestring):
            print x[i][0].lower() * len(x[i])
        else:
            print "*" * x[i]

draw_stars2(x)
