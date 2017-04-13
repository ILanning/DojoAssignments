class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def change
    user = User.find(params[:id])
    user.name = params[:name]
    user.save()
    redirect_to "/users"
  end

  def create
    User.create(name: params[:name])
    redirect_to "/users"
  end

  def new
  end

  def destroy
    User.destroy(params[:id])
  end

  def total
    render text: User.all().length
  end
end
