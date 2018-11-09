class StrokesController < ApplicationController
  def index
    @strokes = Stroke.all
  end

  def show
    @scorecard = Scorecard.find(params[:id])
    @stroke = @scorecard.strokes
  end

  def create
  end
end
