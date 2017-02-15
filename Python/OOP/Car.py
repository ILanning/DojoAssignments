class Car(object):
    def __init__(self, price=0, speed=0, fuel="Empty", mileage=0):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()

    def display_all(self):
        print "Price: ${}".format(self.price)
        print "Speed: {}mph".format(self.speed)
        print "Fuel: {}".format(self.fuel)
        print "Mileage: {}mpg".format(self.mileage)
        print "Tax: {}".format(self.tax)
        print
        return "string"

car1 = Car(20000, 30, "Full", 15)
car2 = Car(20000, 45, "Half Full", 17)
car3 = Car(40000, 0, "Empty", 25)
car4 = Car(10000, 20, "Full", 16)
car5 = Car(35000, 15, "Mostly Full", 34)
car6 = Car(200000, 80, "Nearly Empty", 28)
