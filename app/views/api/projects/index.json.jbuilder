@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :description, :goal_funding,
        :creator_id, :category_id, :location_id, :campaign_end_date, :pledged_amt
        json.media url_for(project.media) if project.media.attached?
    end
end

json.users do
    @projects.each do |project|
        json.set! project.creator_id do
            json.name project.creator.name
        end
    end
end

# json.users do
#     json.creator do
#         json.extract! @project.creator, :id, :name
#     end
# end