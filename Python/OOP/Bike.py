class Bike(object):
    def __init__(self, price=0, max_speed=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "Price: ${}".format(self.price)
        print "Maximum Speed: {} mph".format(self.max_speed)
        print "Miles Traveled: {}".format(self.miles)

    def ride(self):
        print "Riding..."
        self.miles += 10

    def reverse(self):
        print "Reversing..."
        self.miles -= 5
        if (self.miles < 0):
            self.miles = 0

bike1 = Bike(100, 25)
bike2 = Bike(100, 25)
bike3 = Bike(100, 25)

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2.ride()
bike2.reverse()
bike2.ride()
bike2.reverse()
bike2.displayInfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()
