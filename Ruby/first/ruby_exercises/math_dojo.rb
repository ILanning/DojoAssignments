class MathDojo
  attr_reader :result

  def initialize
    @result = 0;
  end
  def add *params
    i = 0
    while i < params.length do
      if params[i].class == [].class
        params += params[i]
      else
        @result += params[i]
      end
      i += 1
    end
    return self
  end

  def subtract *params
    i = 0
    while i < params.length do
      if params[i].class == [].class
        params += params[i]
      else
        @result -= params[i]
      end
      i += 1
    end
    return self
  end
end

math = MathDojo.new
puts math.add([4, [5, 9]], 2).subtract([4, [5, 9]], 2).result
