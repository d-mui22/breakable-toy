class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :holes
end
