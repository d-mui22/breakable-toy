class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role, :email, :handicap, :full_name
  has_many :scorecards

  def full_name
    object.first_name + " " + object.last_name
  end
end
