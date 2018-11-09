class ScorecardSerializer < ActiveModel::Serializer
  attributes :id, :golf_course_id, :user_id

  belongs_to :user
  belongs_to :golf_course
  has_many :strokes
end
