class Human
  attr_accessor :health
  def initialize
    @strength = 3
    @intelligence = 3
    @stealth = 3
    @health = 100
  end
  def attack obj
    if obj.class.ancestors.include? Human
      obj.health -= 10
      return true
    else
      return false
    end
  end
end
