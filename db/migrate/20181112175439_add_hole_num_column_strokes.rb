class AddHoleNumColumnStrokes < ActiveRecord::Migration[5.2]
  def change
    add_column :strokes, :holeNum, :integer
  end
end
