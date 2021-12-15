num = 4

if(num > 6)
    puts "it's smaller than 6"
end


if num > 6  || num < 0

    puts "In a good range!"

elsif num < 5
    puts "still not bad"

else
    puts "please change it"

end


username = "Matt"
unless username == "Anh"
    puts "Choose a better username"
end

raining = true
puts raining ? "It's raining" : "It's sunny!"


day = "Tuesday"
puts "It's not weekend yet!" if day == "Tuesday"