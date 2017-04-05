def guess_number guess
  number = 25;
  if guess == number
    return "You guessed correctly!"
  elsif guess < number
    return "Too low!"
  else
    return "Too high!"
  end
end

puts guess_number 25
puts guess_number 10
puts guess_number 30
puts "ruby" unless 0
