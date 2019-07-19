class CollectionsController < ApplicationController
    def index
        @collections = Collection.all
        render(json: @collections)
    end

    def get
         render(json: current_user.collections)
    end

    def show
        @collections = Collection.find(params[:id])
        render(json: @collections)
    end

    def create
        @team = Team.find(params['team_id'])
        render(json: @team.collection.create(name: params['name']))
    end

     def destroy
            @collections = Collection.find(params[:id])
            @collections.destroy
            render(json: @collections)
        end

    def collection_params
        params.permit(:name, :team_id)
    end
end
