class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role, :email, :handicap, :full_name, :strokes

  has_many :scorecards
  has_many :strokes, through: :scorecards
  has_many :golf_courses, through: :scorecards

  def full_name
    object.first_name + " " + object.last_name
  end


end
