class Api::RewardsController < ApplicationController

    def index
        @rewards = Reward.find_by(project_id: params[:project_id])
    end

    def create
        @reward = Reward.new(reward_params)
        @reward.project_id = params[:project_id]
        debugger

        if @reward.save
            render '/api/projects/show'
        else
            debugger
            render json: @reward.errors.full_messages, status: 401
        end

    end

    private

    def reward_params
        debugger
        params.require(:reward).permit(:title, :description, :delivery_date, 
        :pledge_amt, :ship_to, :project_id)
    end
end
