class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :goal_funding, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.integer :location_id, null: false
      t.datetime :campaign_end_date, null: false

      t.timestamps
    end
    add_index :projects, :creator_id
    add_index :projects, :category_id
    add_index :projects, :location_id

    
  end
end
