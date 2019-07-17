class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string(:name)
      t.boolean(:private, default: true)
      t.timestamps
    end
  end
end
