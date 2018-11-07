class AddHolesToGolfCourse < ActiveRecord::Migration[5.2]
  def change
    add_column :golf_courses, :hole1, :integer
    add_column :golf_courses, :hole2, :integer
    add_column :golf_courses, :hole3, :integer
    add_column :golf_courses, :hole4, :integer
    add_column :golf_courses, :hole5, :integer
    add_column :golf_courses, :hole6, :integer
    add_column :golf_courses, :hole7, :integer
    add_column :golf_courses, :hole8, :integer
    add_column :golf_courses, :hole9, :integer
    add_column :golf_courses, :hole10, :integer
    add_column :golf_courses, :hole11, :integer
    add_column :golf_courses, :hole12, :integer
    add_column :golf_courses, :hole13, :integer
    add_column :golf_courses, :hole14, :integer
    add_column :golf_courses, :hole15, :integer
    add_column :golf_courses, :hole16, :integer
    add_column :golf_courses, :hole17, :integer
    add_column :golf_courses, :hole18, :integer
  end
end
