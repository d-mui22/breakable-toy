class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :sorted_holes

  has_many :holes

  def sorted_holes
    object.holes.sort_by(&:hole)
  end
end
