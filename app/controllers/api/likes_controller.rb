class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render "/api/likes/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    # def show
    #     render "/api/likes/show"
    # end

    private

    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end