class Api::V1::GolfCoursesController < ApplicationController
  def index
    render json: GolfCourse.all
  end

  def show
    render json: GolfCourse.find(params[:id])
  end

  def create
    @golf_course = GolfCourse.new(golf_course_params)
    if @golf_course.save
      flash[:notice] = 'Golf Course Added!'
      redirect_to golf_course_path(@golf_course)
    end
  end


  private

  def golf_course_params
    params.require(:golf_course).permit(:name)
  end
end
