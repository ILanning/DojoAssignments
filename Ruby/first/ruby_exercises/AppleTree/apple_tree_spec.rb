require_relative "apple_tree"

RSpec.describe AppleTree do
  before(:each) do
    @tree = AppleTree.new
  end
  it "has a getter and a setter for age" do
    @tree.age = 3
    expect(@tree.age).to eq 3
  end
  it "has getter methods for height and apple_count" do
    expect(@tree.height).to eq 1
    expect(@tree.apple_count).to eq 0
  end
  it "raises errors if you try to set height and apple_count directly" do
    expect{ @tree.height = 2 }.to raise_error NoMethodError
    expect{ @tree.apple_count = 2 }.to raise_error NoMethodError
  end
  it "has a method to age the tree" do
    @tree.year_gone_bye
    expect(@tree.age).to eq 1
    expect(@tree.height).to eq 1.1
    expect(@tree.apple_count).to eq 0
  end
  it "has a method to pick apples from the tree" do
    @tree.year_gone_bye
    @tree.year_gone_bye
    @tree.year_gone_bye
    expect(@tree.apple_count).to eq 2
    @tree.pick
    expect(@tree.apple_count).to eq 0
  end
  context "younger than 3" do
    it "does not grow apples" do
      expect(@tree.apple_count).to eq 0
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 0
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 0
    end
  end
  context "between 3 and 10" do
    it "should grow apples" do
      @tree.age = 2
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 2
      @tree.year_gone_bye
      @tree.year_gone_bye
      @tree.year_gone_bye
      @tree.year_gone_bye
      @tree.year_gone_bye
      @tree.year_gone_bye
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 16
    end
  end
  context "after 10" do
    it "should not grow apples" do
      @tree.age = 10
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 0
      @tree.year_gone_bye
      expect(@tree.apple_count).to eq 0
    end
  end
end
