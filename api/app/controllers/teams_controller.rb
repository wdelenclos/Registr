class TeamsController < ApplicationController
    def index
        @teams = Team.all
        render(json: @teams)
    end

    def get
        render(json: current_user.teams)
    end

    def join
        @team = Team.find(params['team_id'])
        @team.users.create(id: current_user.id, email: current_user.email, created_at: current_user.created_at, updated_at: current_user.updated_at)
        render(json: @team)
    end

    def create
        @team = current_user.teams.create(name: params['name'],isPrivate: params['isPrivate'])
        render(json: @team)
    end

    def show
        @team = Team.find(params[:id])
        render(json: @team)
    end

    def destroy
        @team = Team.find(params[:id])
        @team.destroy
        render(json: @team)
    end
    
    def team_params
        params.permit(:name, :isPrivate)
    end
end


