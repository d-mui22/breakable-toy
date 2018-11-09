Rails.application.routes.draw do
  root 'golf_courses#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:show] do
    resources :golf_courses, only: [:index, :show] do
      resources :scorecards, only: [:index, :show, :create]
    end
  end

  resources :golf_courses, only: [:index, :show]

  resources :golf_courses, only: [:index, :show] do
    resources :holes, only: [:index, :show, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :golf_courses, only: [:index, :show] do
          resources :scorecards, only: [:index, :show] do
            resources :strokes, only: [:show, :create]
          end
        end
      end
      resources :golf_courses, only: [:index, :show, :create] do
        resources :holes, only: [:show, :index, :create]
        resources :scorecards, only: [:index, :show, :create]
      end
    end
  end
end
