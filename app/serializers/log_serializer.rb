class LogSerializer < ActiveModel::Serializer
  attributes :id, :date, :from_to, :remarks_and_endorsements, :dual_received, :pilot_in_command :total_duration

  belongs_to :aircraft  
end
