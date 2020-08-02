@rewards.each do |reward|
    json.set! reward.id do
        json.extract! reward, :id, :title, :description, :delivery_date,
        :pledge_amt, :ship_to
    end
end