class HolesController < ApplicationController

def new
  @hole = Hole.new
end

def show
  @hole = Hole.find(params[:id])
  
end

def create

end

end
