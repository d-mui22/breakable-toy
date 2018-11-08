class Scorecard < ApplicationRecord
  validates :golf_course_id, presence: true
  validates :user_id, presence: true

  belongs_to :user
  belongs_to :golf_course
  # has_many :holes, through: :golf_course
end
