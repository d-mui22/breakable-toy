class GolfCoursesController < ApplicationController
  before_action :authenticate_user!
  def index
    @golfcourses = GolfCourse.all
  end

  def show
    @golfcourse = GolfCourse.find(params[:id])
  end
end
