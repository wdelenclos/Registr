class Team < ApplicationRecord
    has_many :team_users
    has_many :users, through: :team_users

    has_many :collection

    validates_presence_of :name, :private
end
