User.destroy_all
u1 = User.create(:name => "Armando", :password => "chicken")
u2 = User.create(:name => "Phani", :password => "chicken")
u3 = User.create(:name => "Katrina", :password => "chicken")

Plane.destroy_all
p1 = Plane.create(:name=> 'Jet 123', :row => 28, :column => 6)
p2 = Plane.create(:name=> 'Boeing 767', :row => 30, :column => 4)
p3 = Plane.create(:name=> 'Airbus 09', :row => 22, :column => 6)

Flight.destroy_all
f1 = Flight.create(:number=> 'JT2', :origin => 'SFO', :destination => 'SYD', :date => '2016/08/11' )
f2 = Flight.create(:number=> 'BE9', :origin => 'SYD', :destination => 'MEL', :date => '2016/08/12')
f3 = Flight.create(:number=> 'AB7', :origin => 'MEL', :destination => 'SFO', :date => '2016/08/08')

r1 = Reservation.new
r1.user = u1
r1.flight = f1
r1.save

r2 = Reservation.new
r2.user = u2
r2.flight = f2
r2.save

r3 = Reservation.new
r3.user = u3
r3.flight = f3
r3.save
puts "fuu"
# Adding flights to planes
p1.flights << f1
p2.flights << f2
p3.flights << f3
