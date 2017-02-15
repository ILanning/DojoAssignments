class Bike(object):
    def __init__(self, price=0, max_speed=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "Price: ${}".format(self.price)
        print "Maximum Speed: {} mph".format(self.max_speed)
        print "Miles Traveled: {}".format(self.miles)
        return self

    def ride(self):
        print "Riding..."
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing..."
        self.miles -= 5
        if (self.miles < 0):
            self.miles = 0
        return self

Bike(100, 25).ride().ride().ride().reverse().displayInfo()
Bike(100, 25).ride().ride().reverse().reverse().displayInfo()
Bike(100, 25).reverse().reverse().reverse().displayInfo()
