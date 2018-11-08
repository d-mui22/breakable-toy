class HolesSerializer < ActiveModel::Serializer
  attributes :hole, :id, :yards, :par, :strokes, :golf_course_id, :scorecard_id, :created_at

  belongs_to :golf_course
  belongs_to :scorecard

end
