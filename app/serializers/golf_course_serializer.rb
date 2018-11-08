class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :holes

  def holes
    object.holes.sort_by(&:hole)
  end
end
