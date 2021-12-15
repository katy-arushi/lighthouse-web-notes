class Shape 
    def initialize initial_color
        @color = initial_color
    end

    # attr_reader :color
    # def color
    #     @color
    # end

    # attr_writer :color
    # def color= new_color
    #     @color = new_color
    # end

    attr_accessor :color
end

myShape = Shape.new 'pink'
p myShape
p myShape.color
myShape.color = 'green'
p myShape.color