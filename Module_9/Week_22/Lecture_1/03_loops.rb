counter = 0

# loop do
#     puts "The counter is #{counter}"
#     counter += 1
# end

# while counter < 10
#     puts "The counter is #{counter}"
#     counter += 1
# end

until counter > 10
    puts "The counter is #{counter}"
    counter += 1
end


dogs = ["Bita", "Milo", "Cocoa"]
dogs.each_with_index do |dog, index|
    puts "#{dog} is at index#{index}"
end


(1...10).each do |num|
    puts num
end

11.times do
    puts "Hello worlds!"
end

