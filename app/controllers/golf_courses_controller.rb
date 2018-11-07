class GolfCoursesController < ApplicationController
  def index
    @golfcourses = GolfCourse.all
  end

  def show
    @golfcourse = GolfCourse.find(params[:id])
  end
end
