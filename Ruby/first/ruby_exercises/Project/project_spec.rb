require_relative 'project'
RSpec.describe Project do
  before(:each) do
    # updated this block to create two projects
    @project1 = Project.new('Project 1', 'description 1', "Owner 1")
    @project2 = Project.new('Project 2', 'description 2', "Owner 2")
  end
  it 'has a getter and setter for name attribute' do
    @project1.name = "Changed Name" # this line would fail if our class did not have a setter method
    expect(@project1.name).to eq("Changed Name") # this line would fail if we did not have a getter or if it did not change the name successfully in the previous line.
  end
  it 'has a getter and setter for owner attribute' do
    @project1.owner = "Changed Owner"
    expect(@project1.owner).to eq("Changed Owner")
  end
  it 'has methods for adding, getting, and printing tasks' do
    @project1.add_task "Task1"
    @project1.add_task "Task2"
    expect(@project1.tasks).to eq(["Task1", "Task2"])
    expect{@project1.print_tasks}.to output("Task1\nTask2\n").to_stdout
  end
  it 'has a method elevator_pitch to explain name and description' do
    expect(@project1.elevator_pitch).to eq("Project 1, description 1")
    expect(@project2.elevator_pitch).to eq("Project 2, description 2")
  end
end
