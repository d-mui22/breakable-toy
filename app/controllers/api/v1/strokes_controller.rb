class Api::V1::StrokesController < ApplicationController
  def index
    @strokes = Stroke.all
    render json: @strokes
  end

  def show
    @scorecard = Scorecard.find(params[:id])
    @strokes = @scorecard.strokes
    render json: @strokes
  end

  def create
    @stroke = Stroke.new(stroke_params)
    if @stroke.save
      flash[:notice] = 'Stokes Saved'
    end
  end

  private

  def stroke_params
    params.permit(:strokes, :scorecard_id, :hole_id, :user_id)
  end
end
