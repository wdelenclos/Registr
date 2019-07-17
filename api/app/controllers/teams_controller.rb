class TeamsController < ApplicationController
    def index
        @teams = Team.all
        render(json: @teams)
    end

    def get
        render(json: current_user.teams)
    end

    def create
        @team = current_user.teams.create(name: params['name'],private: params['private'])
        render(json: @team)
    end
    
    def team_params
        params.permit(:name, :private)
    end
end


