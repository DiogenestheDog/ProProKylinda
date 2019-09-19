class Api::UsersController < ApplicationController
    
    def index
        @users = User.all
        render "api/users/index"
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
    end

    def edit
        @user = User.find_by(username: user_params[username]);
        if @user and user_params[:avatar]
            if @user.avatar.attach(params[:avatar])
                render "api/users/show"
            else
                render json: @user.errors.full_messages, status: 422
            end
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :avatar, :email)
    end
end
