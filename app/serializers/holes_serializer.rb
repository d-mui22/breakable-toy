class HolesSerializer < ActiveModel::Serializer
  attributes :id, :yards, :par, :strokes, :golf_course_id, :scorecard_id

  belongs_to :golf_course
  belongs_to :scorecard
end
