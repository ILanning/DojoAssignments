class TimesController < ApplicationController
  def index
    if !session[:count]
      session[:count] = 0
    end
    session[:count] += 1
    render text: "You've visited this url #{session[:count]} times"
  end
  def restart
    session.clear
    render text: "Destroyed the session!"
  end
end
