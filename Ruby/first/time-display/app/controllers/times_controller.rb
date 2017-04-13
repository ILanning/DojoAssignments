class TimesController < ApplicationController
  def main
    @time = {date: Time.now.strftime("%m/%d/%Y"), time: Time.now.strftime("%H:%M")}
  end
end
