class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :users, :through => :reservations
end
