class CreateScorecards < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecards do |t|
      t.belongs_to :user, null: false
      t.belongs_to :golf_course, null:false

      t.timestamps null: false
    end
  end
end
