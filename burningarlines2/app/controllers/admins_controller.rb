class AdminsController < ApplicationController

  before_action :authorize_admin # need to get the urls for it


  private
  def authorize_admin
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
