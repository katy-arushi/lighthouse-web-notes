# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Starting to seed the database..."

puts "Generating locations..."

30.times do
    Location.create(
        name: Faker::Movies::LordOfTheRings.location
    )
end

locations = Location.all # An array of all locations.

puts "Generating characters..."

50.times do
    Character.create(
        name: Faker::Movies::LordOfTheRings.character,
        location: locations.sample # Grabs one random item from the array.
    )
end

puts "Seeding done."
