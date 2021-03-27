class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age

  # When you write the AR macros in a serializer file, you're saying to use the appropriate serializer
  has_many :toyboxes
end
