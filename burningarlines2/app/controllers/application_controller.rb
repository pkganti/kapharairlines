class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :fetch_user

  private
  def fetch_user
    # Search for a user by their user id if we can find one in the session hash.
    if session[:user_id].present?
      @current_user = User.find_by :id => session[:user_id]

      # Clear out the session user_id if no user is found.
      session[:user_id] = nil unless @current_user
    end
  end

  def check_for_user
   redirect_to root_path unless @current_user.present?
  end

  def authorize_admin
    redirect_to search_path unless @current_user.present? && @current_user.admin?
  end
end
