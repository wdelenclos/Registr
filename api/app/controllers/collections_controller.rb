class CollectionsController < ApplicationController
    def index
        @collections = Collection.all
        render(json: @collections)
    end

    def create
        @team = Team.find(params['team_id'])
        render(json: @team.collection.create(name: params['name']))
    end

    def collection_params
        params.permit(:name, :team_id)
    end
end
