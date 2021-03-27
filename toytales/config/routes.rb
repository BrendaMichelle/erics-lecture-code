Rails.application.routes.draw do
  resources :toyboxes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :toys

  post "/sum", to: "toys#sum"

  get "/toys/count", to: "toys#count"
  get "/toys", to: "toys#index"
  post "/toys", to: "toys#create"
  get "/toys/:id", to: "toys#show"
  patch "/toys/:id", to: "toys#update"
  delete "/toys/:id", to: "toys#destroy"
end
