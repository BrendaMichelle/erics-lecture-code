class Toy < ApplicationRecord
    has_many :toyboxes
    has_many :users, through: :toyboxes

    def nice_timestamp
        self.created_at.strftime("%I:%M%p")
    end

end
