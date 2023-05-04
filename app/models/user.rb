class User < ApplicationRecord
    has_many :logs 

    has_secure_password 
end
