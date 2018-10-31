class GolfCoursesController < ApplicationController
  def index
    @golfcourses = GolfCourse.all
  end

end
