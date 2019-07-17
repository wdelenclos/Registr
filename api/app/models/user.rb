class User < ApplicationRecord
  has_many :team_users
  has_many :teams, through: :team_users

  has_secure_password

  validates :email, presence: true, uniqueness: true
end
