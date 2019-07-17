class UsersController < ApplicationController
  skip_before_action :authenticate_request
  def register
    @user = User.create!(user_params)
    if @user.save
      render(json: { message: "User created successfully" }, status: :created)
    else
      render(json: @user.errors, status: :bad)
    end
  end

  def joinTeam
    render(json: params)
  end

  private
  def user_params
    params.permit(:email, :password)
  end
end
