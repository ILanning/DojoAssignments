require "spec_helper"

RSpec.describe Stringer do
  it "concatenates undefined number of strings with a space" do
    expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
  end
  describe "*minify" do
    it "shortens strings that are too long" do
      expect(Stringer.minify("Hello, I'm learning how to create a gem", 10)).to eq "Hello, I'm..."
      expect(Stringer.minify("Hello", 10)).to eq "Hello"
    end
  end
  describe "*replacify" do
    it "replaces words in a string with something else" do
      expect(Stringer.replacify("I can't do this", "can't", "can")).to eq "I can do this"
    end
  end
  describe "*tokenize" do
    it "turns a string into an array of words" do
      expect(Stringer.tokenize("I love to code")).to eq ["I", "love", "to", "code"]
    end
  end
  describe "*removify" do
    it "removes instances of a word from a string" do
      expect(Stringer.removify("I'm not a developer", "not")).to eq "I'm a developer"
    end
  end
end
