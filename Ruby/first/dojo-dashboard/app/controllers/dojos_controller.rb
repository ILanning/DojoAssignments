class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end

  def create
    newDojo = Dojo.new(dojo_params)
    if newDojo.save
      redirect_to "/dojos", flash: { message:"Dojo #{newDojo.branch} successfully created" }
    else
      redirect_to "/dojos/new", flash { errors: newDojo.errors.full_messages }
    end
  end

  def destroy
  end

  private
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end
end
