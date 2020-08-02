Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects do
      resources :rewards, only: [:index, :create]
        

    resources :backings, only: [:create, :show]
  end
end
