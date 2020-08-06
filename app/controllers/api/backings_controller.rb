class Api::BackingsController < ApplicationController


    def show
        @backing = Backing.find(params[:id])
        render :show
    end


    def create
        @backing= Backing.new(backing_params)

        if @backing.save
            render :show
        else
            render json: @backing.errors.full_messages, status: 401
        end

    end


    private

    def backing_params
        params.require(:backing).permit(:backer_id, :project_id, :reward_id)
    end
end