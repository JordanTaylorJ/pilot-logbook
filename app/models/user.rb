class User < ApplicationRecord
    has_many :logs 
    has_many :aircraft, through: :logs 

    has_secure_password 
end
