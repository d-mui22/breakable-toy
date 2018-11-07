class Api::V1::HolesController < ApplicationController

  def index
    render json: Hole.all
  end

  def show
    @course = GolfCourse.find(params[:id])
    @holes = @course.holes
    render json: @holes
  end

  def create
    @hole = Hole.new(hole_params)
    if @hole.save
      flash[:notice] = 'Woot'
      redirect_to golf_courses_path
    end
  end

  def hole_params
    params.require(:hole).permit(:yards, :par, :hole)
  end
end
