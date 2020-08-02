class Project < ApplicationRecord

    validates :title, :description, :goal_funding, :creator_id, :category_id,
    :location_id, :campaign_end_date, presence: true

    has_one_attached :media
    
    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: "User"

    has_many :backings,
        foreign_key: :project_id,
        class_name: "Backing"

    has_many :rewards,
        foreign_key: :project_id,
        class_name: "Reward"

    has_many :backers,
        through: :backings,
        source: :backer

end