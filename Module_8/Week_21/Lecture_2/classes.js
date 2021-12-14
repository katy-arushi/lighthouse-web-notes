class Rectangle{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }

    area(){
        return this.width * this.length;
    }
};

const myRectangle = new Rectangle(4, 5);
console.log(myRectangle.area());

class Prism extends Rectangle{
    constructor(width, length, height){
        super(width, length)
        this.height = height;
    }


    volume(){
        return this.area() * this.height;
    }
}


const myPrism = new Prism(4, 5, 10);
console.log(myPrism)
console.log(myPrism.volume())


class Interestingrectangle extends Rectangle{
    getWidth(){
        return this.width;
    }
}

const myInterestingrectangle = new Interestingrectangle(10, 3);
console.log(myInterestingrectangle.getWidth())