class Team < ApplicationRecord
    has_many :team_users, dependent: :nullify
    has_many :users, through: :team_users, dependent: :nullify

    has_many :collection, dependent: :delete_all

    validates_presence_of :name, :isPrivate
end
