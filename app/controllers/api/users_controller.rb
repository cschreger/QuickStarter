class UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render `api/users/#{@user.id}`
        else
            render json: ["Invalid!"], status: 422
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:name, :password)
    end
end