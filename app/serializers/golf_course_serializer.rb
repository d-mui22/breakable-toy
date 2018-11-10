class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :holes, :scorecards

  has_many :scorecards
  has_many :holes

  def holes
    object.holes.sort_by(&:hole)
  end
end
