class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :logs
end
