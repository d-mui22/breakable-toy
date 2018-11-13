class StrokeSerializer < ActiveModel::Serializer
  attributes :id, :strokes, :hole, :user_id, :hole_number

  belongs_to :hole
  belongs_to :scorecard
  has_one :user, through: :scorecard

  def hole_number
    object.hole.hole
  end
end
