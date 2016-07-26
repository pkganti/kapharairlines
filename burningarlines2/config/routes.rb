Rails.application.routes.draw do

  root :to => 'pages#home'
  resources :flights
  resources :planes
  post '/search' => 'pages#search'
  # get '/new' => 'users#new'
  resources :users

  get '/login' =>'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
