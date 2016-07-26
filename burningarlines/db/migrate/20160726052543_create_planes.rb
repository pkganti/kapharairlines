class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.string :name
      t.integer :row
      t.integer :column

      t.timestamps null: false
    end
  end
end
