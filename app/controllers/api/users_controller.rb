class Api::UsersController < ApplicationController

    def show
        @user - User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        debugger

        if @user.save
            debugger
            login!(@user)
            render json: ["Success"]
        else
            debugger
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end