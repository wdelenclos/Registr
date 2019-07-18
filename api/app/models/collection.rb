class Collection < ApplicationRecord
  belongs_to :team, dependent: :delete
  has_many :posts, dependent: :delete_all


  validates_presence_of :name
end
