class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in

    def current_user
       @current_user ||= User.find_by(session_token: session[session_token])   
    end

    def ensure_logged_in
        redirect to 'api/users' unless logged_in?
    end

    def login!(user)
        @current_user = user
        session_token = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[session_token] = nil
    end

    def logged_in?
        !!current_user
    end

end
