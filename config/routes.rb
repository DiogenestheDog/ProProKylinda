Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit, :index] do
      resources :posts, only: :index
    end

    resources :posts, only: [:create, :show, :edit, :destroy, :index]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end
