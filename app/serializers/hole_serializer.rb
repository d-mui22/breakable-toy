class HoleSerializer < ActiveModel::Serializer
  attributes :hole, :id, :yards, :par, :strokes, :golf_course_id, :created_at

  belongs_to :golf_course
  belongs_to :scorecard
  has_many :strokes
end
