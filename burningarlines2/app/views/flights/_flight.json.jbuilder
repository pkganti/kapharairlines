json.extract! flight, :id, :number, :origin, :destination, :date, :created_at, :updated_at
json.url flight_url(flight, format: :json)