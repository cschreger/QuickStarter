class Api:RewardsController < ApplicationController

    def index
        @rewards = Rewards.find_by(project_id: params[:project_id])
    end

    def create
        @reward = Reward.new(reward_params)

        if @reward.save
            render '/api/projects/show'
        else
            render json: @reward.errors.full_messages, status: 401
        end

    end

    private

    def reward_params
        params.require(:reward).permit(:title, :description, :delivery_date, 
        :pledge_amt, :ship_to)
    end
end
