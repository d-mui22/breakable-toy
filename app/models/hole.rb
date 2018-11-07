class Hole < ApplicationRecord
  validates :golf_course_id, presence: true
  validates :par, presence: true
  validates :yards, presence: true
  validates :hole, presence: true

  belongs_to :golf_course
  has_many :strokes
end
