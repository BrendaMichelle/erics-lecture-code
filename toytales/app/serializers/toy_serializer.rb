class ToySerializer < ActiveModel::Serializer
  # Attributes in the serializer takes in symbols of instance methods
  attributes :id, :name, :image, :likes, :nice_timestamp
end
