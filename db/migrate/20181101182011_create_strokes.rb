class CreateStrokes < ActiveRecord::Migration[5.2]
  def change
    create_table :strokes do |t|
      t.belongs_to :scorecard, null: false
      t.belongs_to :hole, null: false
      t.string :strokes

      t.timestamps null: false
    end
  end
end
