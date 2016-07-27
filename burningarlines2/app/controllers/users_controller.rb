class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def show
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
