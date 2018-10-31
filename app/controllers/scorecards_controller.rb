class Scorecard < ApplicationController
  def show
    @scorecard = Scorecard.find(params[:id])
  end
end
