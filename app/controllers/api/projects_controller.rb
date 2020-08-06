class Api::ProjectsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :destroy, :update]

    def index
        @projects = Project.includes(:creator).all
        render :index
    end

    def show
        @project = Project.find(params[:id])
        render :show
    end

    def new
        @project = Project.new
    end

    def create 
        @project = Project.new(project_params)
        @project.creator_id = current_user.id
        debugger
        if @project.save
            render 'api/projects/show'
        else

            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = Project.find_by(id: params[:id])

        if current_user.id = @project.creator_id
            render :show
        else
            render json: ["This is not your project to edit!"], status: 404
        end
    end

    def destroy
        @project = Project.find_by(id: params[:id])

        if current_user.id = @project.creator_id
            @project.destroy
        else
            render json: ["This is not your project to delete!"], status: 404
        end
    end

    private

    def project_params
        params.require(:project).permit(:title, :description, :goal_funding,
        :category_id, :location_id, :campaign_end_date, :media)
    end

            
end