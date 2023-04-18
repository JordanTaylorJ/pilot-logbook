class CreateLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :logs do |t|
      t.string :user_id 
      t.string :date
      t.string :aircraft_type
      t.string :aircraft_ident

      t.timestamps
    end
  end
end
