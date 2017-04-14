class User < ActiveRecord::Base
  has_secure_password
  validates :name, :email, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message:"invalid email string" }
  before_validation :lowercase_email

  def lowercase_email
    email.downcase!
  end
end
