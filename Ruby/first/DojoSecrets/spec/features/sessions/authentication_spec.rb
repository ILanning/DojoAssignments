require 'rails_helper'
feature 'authentication feature' do
  before do
    @user = create(:user)
  end
  feature "user attempts to sign-in" do
    scenario 'visits sign-in page, prompted with email and password fields' do
      visit "/sessions/new"
      expect(page).to have_field "Email"
      expect(page).to have_field "Password"
    end
    scenario 'logs in user if email/password combination is valid' do
      log_in
      expect(current_path).to eq "/users"
    end
    scenario 'does not sign in user if email is not found' do
      log_in email: "b"
      expect(page).to have_content "Email"
    end
    scenario 'does not sign in user if email/password combination is invalid' do
      log_in password: "f"
      expect(current_path).to eq "/sessions/new"
      expect(page).to have_content "Password"
    end
  end
  feature "user attempts to log out" do
    scenario 'displays "Log Out" button when user is logged on' do
      log_in
      expect(page).to have_selector "input", text: "Log Out"
    end
    scenario 'logs out user and redirects to login page' do
      log_in
      visit "/users"
      click_button "Log Out"
      expect(current_path).to eq "/sessions/new"
    end
  end
end
