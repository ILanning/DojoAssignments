class SurveyController < ApplicationController
  def show
    if !flash[:count]
      flash[:count] = 0
    else
      flash[:count] = flash[:count]
    end
  end

  def result
    flash[:count] = flash[:count] + 1
    flash[:message] = "Thanks for submitting this form!  You have submitted this form #{flash[:count]} times now"
    @results = survey_params
    render "result"
  end

  private
    def survey_params
      params.require(:survey).permit(:name, :location, :language, :comment)
    end
end
