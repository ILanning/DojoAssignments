class RpgController < ApplicationController
  def index
    if !session[:gold]
      session[:gold] = 0
    end
    if !session[:activities]
      session[:activities] = []
    end
  end
  def farm
    earnings = rand(10..20)
    session[:gold] += earnings
    session[:activities].push [earnings, "farm", Time.now]
    redirect_to "/"
  end
  def cave
    earnings = rand(5..10)
    session[:gold] += earnings
    session[:activities].push [earnings, "cave", Time.now]
    redirect_to "/"
  end
  def house
    earnings = rand(2..5)
    session[:gold] += earnings
    session[:activities].push [earnings, "house", Time.now]
    redirect_to "/"
  end
  def casino
    earnings = rand(-50..50)
    session[:gold] += earnings
    session[:activities].push [earnings, "casino", Time.now]
    redirect_to "/"
  end
end
