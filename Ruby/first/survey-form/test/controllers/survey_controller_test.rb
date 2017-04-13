require 'test_helper'

class SurveyControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get submit" do
    get :submit
    assert_response :success
  end

  test "should get result" do
    get :result
    assert_response :success
  end

end
