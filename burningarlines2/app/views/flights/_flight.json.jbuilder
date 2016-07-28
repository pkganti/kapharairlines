
json.extract! flight, :id, :number, :origin, :destination, :date, :created_at, :updated_at, :plane_id

# json.(@flight, :id, :number, :origin, :destination, :date, :created_at, :updated_at, @flight.plane => :name)

json.url flight_url(flight, format: :json)
