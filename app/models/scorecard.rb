class Scorecard < ApplicationRecord
  validates :golfcourse_id, presence: true
  validates :golfer_id, presence: true
  validates :strokes, presence: true
  validates :par, presence: true
  validates :holes, presence: true

end
