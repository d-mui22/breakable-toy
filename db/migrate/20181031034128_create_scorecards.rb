class CreateScorecards < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecards do |t|
      t.belongs_to :golfcourse, null: false
      t.belongs_to :golfer, null: false
      t.string :strokes, null: false

      t.timestamps null: false
    end
  end
end
