class PostsController < ApplicationController
  def index
    authorize!(:read)

    @posts = Post.all
    render(json: @posts)
  end

  def show
    authorize!(:read)

    @post = Post.find(params[:id])
    render(json: @post)
  end

  def create
    #authorize!(:create)

    if params[:url]
    page = MetaInspector.new(params[:url])


    @post = Post.new(title: page.title, url: page.url, image: page.images.best, description: page.description)
    @post.save
    render(json: @post)

    end
  end

  def update
    authorize!(:update)

    @post = Post.find(params[:id])
    @post.update(post_params)
  end

  def destroy
    authorize!(:destroy)

    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :images, :description)
  end
end
