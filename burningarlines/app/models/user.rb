class User < ActiveRecrd::Base
  has_secure_password
  has_many: flights, :through => :reservations
  
end
