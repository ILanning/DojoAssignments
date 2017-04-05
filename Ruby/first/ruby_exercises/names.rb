def puts_names arr
  arr.each{ |first_name: "", last_name: ""| puts "The name is #{first_name} #{last_name}" }
end

puts_names [
  { first_name: "Michael1", last_name: "Ahoi" },
  { first_name: "Michael2", last_name: "Bhoi" },
  { first_name: "Michael3", last_name: "Choi" },
  { first_name: "Michael4", last_name: "Dhoi" },
  { first_name: "Michael5", last_name: "Ehoi" },
]
