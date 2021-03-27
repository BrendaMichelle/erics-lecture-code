class CreateToyboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :toyboxes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :toy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
