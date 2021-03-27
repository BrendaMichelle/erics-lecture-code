class ToyboxSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :toy
end
