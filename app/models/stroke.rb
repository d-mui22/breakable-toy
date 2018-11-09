class Stroke < ApplicationRecord
  validates :scorecard_id, presence: true
  validates :hole_id, presence: true

  belongs_to :scorecard
  belongs_to :hole
end
