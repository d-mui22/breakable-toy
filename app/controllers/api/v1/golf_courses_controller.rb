class Api::V1::GolfCoursesController < ApplicationController
  def index
    render json: GolfCourse.all
  end

  def show
    golf_course = GolfCourse.find(params[:id])

    render json: golf_course
  end

  def create
    @golf_course = GolfCourse.new(golf_course_params)
    golf_id = @golf_course.id
    if @golf_course.save
      flash[:notice] = 'Golf Course Added!'
    end
    render json: @golf_course
  end


  private

  def golf_course_params
    params.require(:golf_course).permit(:name)
  end
end
