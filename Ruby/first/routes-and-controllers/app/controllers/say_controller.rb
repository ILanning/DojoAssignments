class SayController < ApplicationController
  def main
    render text: "Hello Coding Dojo!"
  end
  def hello
    render text: "Saying Hello!"
  end
  def joe
    render text: "Saying Hello Joe!"
  end
  def michael
    redirect_to "/say/hello/joe"
  end
  def index
    render text: "What do you want me to say???"
  end
end
