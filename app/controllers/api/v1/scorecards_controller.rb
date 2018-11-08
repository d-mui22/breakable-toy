class Api::V1::ScorecardsController < ApplicationController

  def index
    render json: Scorecard.all
  end

  def show
    @user = User.find(params[:id])
    @scorecards = @user.scorecards
    render json: @scorecards
  end

  def create
    @scorecard = Scorecard.new(scorecard_params)
    if @scorecard.save
      flash[:notice] = 'Scorecard Added!'
    end
  end

  private

  def scorecard_params
    params.require(:scorecard).permit(:user_id, :golf_course_id)
  end
end
