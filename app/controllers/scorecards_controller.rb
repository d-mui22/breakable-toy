class ScorecardsController < ApplicationController
  def index
    @scorecards = Scorecard.all
  end

  def show
    @scorecard = Scorecard.find(params[:id])
  end

  def create
  end
end
