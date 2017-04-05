class Project
  attr_accessor :name, :description, :owner

  def initialize name, description, owner
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end
  def elevator_pitch
    return "#{@name}, #{@description}"
  end
  def tasks
    return @tasks
  end
  def add_task task
    tasks.push task
  end
  def print_tasks
    tasks.each{ |task| puts task }
  end
end
