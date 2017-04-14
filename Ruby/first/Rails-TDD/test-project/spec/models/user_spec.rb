require 'rails_helper'

RSpec.describe User, type: :model do
  it "should fail if the first name is not present" do
    user = User.new(
      first_name: "",
      last_name: "chang",
      email: "schang@gmail.com"
    )
    expect(user).to be_invalid
  end

    it "should not save if last_name field is blank"

    it "should not save if email already exists"

    it "should not save if invalid email format"
end
