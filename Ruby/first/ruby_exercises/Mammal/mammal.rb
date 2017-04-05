class Mammal
  protected
    attr_accessor :health
  public
    def initialize
      @health = 150
    end
    def display_health
      puts @health
      return self
    end
end
