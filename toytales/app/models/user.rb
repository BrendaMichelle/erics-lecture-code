class User < ApplicationRecord
    has_many :toyboxes
    has_many :toys, through: :toyboxes
end
