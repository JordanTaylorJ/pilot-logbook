class LogSerializer < ActiveModel::Serializer
  attributes :id, :date, :from_to, :remarks_and_endorsements, :take_offs, :landings, :single_engine_land, :multi_engine_land, :night, :actual_instrument, :simulated_instrument, :cross_country, :flight_instructor, :dual_received, :pilot_in_command, :total_duration

  belongs_to :aircraft  
end
