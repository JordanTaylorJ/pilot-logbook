# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create(username: "Lucy", password: "123")

a1 = Aircraft.create(ident: "N4741N", aircraft_type:"C172")

l1 = Log.create(user_id: u1.id, aircraft_id: a1.id, date: "05/26/2023", take_offs: 1, landings: 1, single_engine_land: 0.9, dual_received: 0.9, total_duration: 0.9)

