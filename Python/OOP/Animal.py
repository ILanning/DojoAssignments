class Animal(object):
    def __init__(self, name = "Unnamed"):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print "Name: {}".format(self.name)
        print "Health: {}".format(self.health)
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print "This is a dragon!"
        super(Dragon, self).displayHealth()
        return self

Animal("animal").walk().walk().walk().run().run().displayHealth()
Dog("dog").walk().walk().walk().run().run().pet().displayHealth()
Dragon("dragon").walk().walk().walk().run().run().fly().displayHealth()
