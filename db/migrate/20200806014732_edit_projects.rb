class EditProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :pledged_amt, :integer, default: 0
  end
end
