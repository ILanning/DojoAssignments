require_relative "human"

class Samurai < Human
  @@samurai_count = 0
  def initialize
    super
    @health = 200
    @@samurai_count += 1
  end
  def death_blow obj
    if obj.class.ancestors.include? Human
      obj.health = 0
      return true
    else
      return false
    end
  end
  def meditate
    @health = 200
    return self
  end
  def self.how_many
    return samurai_count
  end
end
