class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email params[:user][:email]

    if user
      if user.authenticate params[:user][:password]
        session[:user_id] = user.id
        flash[:messages] = [] unless flash[:messages]
        flash[:messages].push "Successfully logged in!"
        redirect_to "/users"
      else
        flash[:errors] = ["Password incorrect"]
        redirect_to "/sessions/new"
      end
    else
      flash[:errors] = ["Email not found"]
      redirect_to "/sessions/new"
    end
  end

  def destroy
    if session[:user_id]
      session[:user_id] = nil
      flash[:messages] = [] unless flash[:messages]
      flash[:messages].push "Logged out!"
      redirect_to "/sessions/new"
    end
  end
end
