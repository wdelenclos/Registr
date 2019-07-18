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

    @post = Post.new(title: page.title, url: page.url, image: page.images.best, description: page.description , collection_id: params[:collection_id])
    @post.save
    render(json: @post)

    end
  end

  def searchWeb
    if params[:title]

     #response = EventMachine::HttpRequest.new('http://google.com/').get :query => {'q' => params[:title]}
     require 'open-uri'
     key = "AIzaSyAP2mZNli2bH0cpcH6cHUPePJe_Epw4tfA"
     url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=017576662512468239146:omuauf_lfve&q="+ params[:title]
     response = open(url).read

    render(json: response)
    end
  end

  def update
    authorize!(:update)

    @post = Post.find(params[:id])
    @post.update(post_params)
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render(json: @post)
  end

  private

  def post_params
    params.permit(:title, :url, :images, :description)
  end
end
