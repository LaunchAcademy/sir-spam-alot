require "sinatra"
require "sinatra/json"
require 'pry'

GUEST_LIST_PATH = File.join(File.dirname(__FILE__), 'guests.json')

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

get "/" do
  erb :home
end

get "/api/v1/guests" do
  guests = JSON.parse(File.read(GUEST_LIST_PATH))
  json guests
end

post '/api/v1/guests' do
  result = JSON.parse(request.body.read)
  json = JSON.parse(File.read(GUEST_LIST_PATH))
  json << result
  File.write(GUEST_LIST_PATH, JSON.pretty_generate(json, indent: "  "))
  status 201
  json result
end
