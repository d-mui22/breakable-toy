class AddUserIdToStrokes < ActiveRecord::Migration[5.2]
  def change
    add_column :strokes, :user_id, :bigint, null: false
  end
end
