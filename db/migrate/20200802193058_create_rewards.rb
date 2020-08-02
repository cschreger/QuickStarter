class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.date :delivery_date, null: false
      t.integer :pledge_amt, null: false
      t.string :ship_to, null: false

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
