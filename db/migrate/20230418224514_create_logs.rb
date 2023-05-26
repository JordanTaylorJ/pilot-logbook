class CreateLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :logs do |t|
      t.integer :user_id 
      t.integer :aircraft_id 
      t.string :date
      t.text :from_to
      t.text :remarks_and_endorsements
      t.float :take_offs
      t.float :landings 
      t.float :single_engine_land 
      t.float :multi_engine_land
      t.float :night
      t.float :actual_instrument
      t.float :simulated_instrument 
      t.float :cross_country 
      t.float :flight_instructor
      t.float :dual_received 
      t.float :pilot_in_command 
      t.float :total_duration 

      t.timestamps
    end
  end
end
