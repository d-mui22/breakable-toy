class GolfCourse < ApplicationRecord
  validates :name, presence: true

  has_many :holes
  has_many :scorecards

end
