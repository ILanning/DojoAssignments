require_relative "human"

class Ninja < Human
  def initialize
    super
    @stealth = 175
  end
  def steal obj
    success = attack obj
    @health += 10 if success
    return success
  end
  def get_away
    @health -= 15
    return self
  end
end
