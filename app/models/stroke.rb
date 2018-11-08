class Stroke < ApplicationRecord
  belongs_to :scorecard
  belongs_to :hole
end
