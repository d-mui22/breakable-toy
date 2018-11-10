class StrokeSerializer < ActiveModel::Serializer
  attributes :id, :strokes, :hole, :user_id

  belongs_to :hole
  belongs_to :scorecard
  has_one :user, through: :scorecard
end
