module MyEnumerable
  def my_each
    for i in 0...self.length
      yield self[i]
    end
  end
end

class Array
  include MyEnumerable
end

["test1","test2","test3"].my_each{ |num| puts num }
