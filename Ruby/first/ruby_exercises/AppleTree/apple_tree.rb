class AppleTree
  attr_accessor :age
  attr_reader :height, :apple_count

  def initialize
    @age = 0
    @height = 1
    @apple_count = 0
  end

  def year_gone_bye
    @age += 1
    @height *= 1.1
    if(@age >= 3 && @age <= 10)
      @apple_count += 2
    end
  end

  def pick
    temp = @apple_count
    @apple_count = 0
    return temp
  end
end
