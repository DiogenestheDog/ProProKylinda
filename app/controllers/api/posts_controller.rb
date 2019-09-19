class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            @posts = Post.all
            render "api/posts/index"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render "api/posts/show"
        else
            render json: ["post not found"], status: 422
        end
    end

    def edit
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.delete and @post.user.id == @post.user_id
            render "api/posts/show"
        else
            render json: ["post could not be deleted"], status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:header, :body, :user_id, :post_type, :image)
    end

end
