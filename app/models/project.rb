class Project < ApplicationRecord

    validates :title, :description, :goal_funding, :creator_id, :category_id,
    :location_id, :campaign_end_date, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: "User"

end