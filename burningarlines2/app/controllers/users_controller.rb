class UsersController < ApplicationController

  before_action :authorise_user, :only => [:search] # need to check if the search is good path

  def new
    @user = User.new
  end

  def show
    raise "hell"
    @user = User.find params[:id]
  end

  def create
    @user = User.new (user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to search_path
    else
      render :new
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :password)
    end

    def authorise_user
      redirect_to root_path unless @current_user.present? && @current_user.admin?
    end
end
