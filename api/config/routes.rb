Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end

  resources :teams
  resources :collections
  
  post "register" => "users#register"
  post "login" => "authentication#login"
  post "search" => "posts#searchWeb"
  get "user/teams" => "teams#get"
  put "teams/join/:team_id" => "teams#join"
end
