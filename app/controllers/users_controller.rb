class UsersController < ApplicationController

    skip_before_action :authorized, only: :create 

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, include: 'logs.aircraft', status: :ok
    end 

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :ok 
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    private
    
    def user_params
        params.permit(:username, :password)
    end

end
