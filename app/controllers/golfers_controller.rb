class GolfersController < ApplicationController
  def show
    @golfer = Golfer.find(params[:id])
  end
end
