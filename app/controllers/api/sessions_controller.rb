class SessionsController < ApplicationController

    def create

    end


    def destroy
        @user = current_user
    end
    
end