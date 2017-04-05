def print1to255
  (1..255).each{ |num| print num }
end

def print_odd_1_to_255
  (1..255).each{ |num| puts num if num % 2 == 1 }
end

print_odd_1_to_255
