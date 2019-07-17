class Collection < ApplicationRecord
  belongs_to :team
  has_many :posts


  validates_presence_of :name
end
