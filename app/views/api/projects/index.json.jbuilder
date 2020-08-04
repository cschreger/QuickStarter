@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :description, :goal_funding,
        :creator_id, :category_id, :location_id, :campaign_end_date
        json.media url_for(project.media) if project.media.attached?
    end
end