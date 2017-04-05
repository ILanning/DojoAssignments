require_relative "mammal"

class Dog < Mammal
  def pet
    self.health += 5
    return self
  end
  def walk
    self.health -= 1
    return self
  end
  def run
    self.health -= 10
    return self
  end
end

Dog.new.walk.walk.walk.run.run.pet.display_health
