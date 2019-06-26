class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text(:title)
      t.text(:url)
      t.text(:image)
      t.text(:description)

      t.timestamps
    end
  end
end
