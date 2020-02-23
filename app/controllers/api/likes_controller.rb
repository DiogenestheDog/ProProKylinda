class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save

        else

        end
    end


    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end