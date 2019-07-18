class Post < ApplicationRecord
  belongs_to :collection, dependent: :delete

  validates_presence_of :title, :url , :description , :image
end
