class CreateHoles < ActiveRecord::Migration[5.2]
  def change
    create_table :holes do |t|
      t.string :yards, null: false
      t.string :par, null: false
      t.integer :hole, null: false
      t.belongs_to :golf_course, null: false

      t.timestamps null: false
    end
  end
end
