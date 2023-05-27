class AircraftsController < ApplicationController

    skip_before_action :authorized, only: [:show] 

    def show
        aircraft = Aircraft.all
        render json: aircraft, status: :ok 
    end 
    
    #def create

    #end 

end
