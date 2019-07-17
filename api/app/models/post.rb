class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :collection

  validates_presence_of :title, :url , :description , :image
end
