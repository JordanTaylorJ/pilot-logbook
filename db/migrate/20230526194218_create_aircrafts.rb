class CreateAircrafts < ActiveRecord::Migration[7.0]
  def change
    create_table :aircrafts do |t|
      t.string :type
      t.string :ident

      t.timestamps
    end
  end
end
