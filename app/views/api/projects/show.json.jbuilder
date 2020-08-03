json.partial! "api/projects/project", project: @project

json.users do
    json.creator do
        json.extract! @project.creator, :id, :name
    end
end

json.rewards do 
    @project.rewards.each do |reward|
        json.set! reward.id do
            json.extract! reward, :id, :project_id, :title, :description, :delivery_date,
            :pledge_amt, :ship_to
        end
    end
end

json.backings do 
    @project.backings.each do |backing|
        json.set! backing.id do
            json.extract! backing, :id, :backer_id, :project_id, :reward_id
        end
    end
end