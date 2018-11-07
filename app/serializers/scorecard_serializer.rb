class ScorecardSerializer < ActiveModel::Serializer
  attributes :id, :golf_course_id, :user_id

  # has_many :holes
end
