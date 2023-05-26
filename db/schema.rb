# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_26_194218) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aircrafts", force: :cascade do |t|
    t.string "type"
    t.string "ident"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logs", force: :cascade do |t|
    t.integer "user_id"
    t.integer "aircraft_id"
    t.string "date"
    t.text "from_to"
    t.text "remarks_and_endorsements"
    t.float "take_offs"
    t.float "landings"
    t.float "single_engine_land"
    t.float "multi_engine_land"
    t.float "night"
    t.float "actual_instrument"
    t.float "simulated_instrument"
    t.float "cross_country"
    t.float "flight_instructor"
    t.float "dual_received"
    t.float "pilot_in_command"
    t.float "total_duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
