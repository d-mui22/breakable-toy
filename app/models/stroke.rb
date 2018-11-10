class Stroke < ApplicationRecord
  validates :scorecard_id, presence: true
  validates :hole_id, presence: true
  validates :user_id, presence: true

  belongs_to :scorecard
  has_one :user, through: :scorecard
  belongs_to :hole
end
