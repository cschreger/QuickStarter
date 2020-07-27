class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:name],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "/"
        else
            render json: ["Invalid name/password combination"], status: 401
        end
    end


    def destroy
        @user = current_user

        if @user
            logout!
            render json: {}
        else
            render json: ["Nobody is signed in!"], status: 404
        end
    end
    
end