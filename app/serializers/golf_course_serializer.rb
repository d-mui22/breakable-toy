class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :holes

  has_many :scorecards

  def holes
    object.holes.sort_by(&:hole)
  end
end
