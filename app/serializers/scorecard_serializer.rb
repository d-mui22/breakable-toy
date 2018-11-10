class ScorecardSerializer < ActiveModel::Serializer
  attributes :id, :golf_course_id, :user_id, :strokes, :holes, :golf_course

  belongs_to :user
  belongs_to :golf_course
  has_many :strokes
  has_many :holes, through: :strokes

  def holes
    object.holes.sort_by(&:hole)
  end
end
