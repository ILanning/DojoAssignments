require_relative "ninja"
require_relative "wizard"
require_relative "samurai"

sam = Samurai.new
wiz = Wizard.new
nin = Ninja.new
puts sam.health
puts wiz.health
puts nin.health
sam.death_blow(nin)
puts nin.health
