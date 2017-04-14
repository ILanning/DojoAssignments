require 'rails_helper'
feature 'User features ' do
  feature "user sign-up" do
    scenario 'visits sign-up page'
    scenario "with improper inputs, redirects back to sign in and shows validations"
    scenario "with proper inputs, create user and redirects to login page"
  end
  feature "user dashboard" do
    scenario "displays user information"
  end
  feature "User Settings Dashboard" do
    scenario "visit users edit page"
    scenario "inputs filled out correctly"
    scenario "incorrectly updates information"
    scenario "correctly updates information"
    scenario "destroys user and redirects to registration page"
  end
end
