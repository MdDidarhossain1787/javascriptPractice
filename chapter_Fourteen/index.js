// function Extend(Parent , Child) {   
// Child.prototype = Object.create(Parent.prototype)// Inharetance
// Child.prototype.constructor = Child
// }


// function Shape(color){
//     this.color = color
// }

// Shape.prototype. Common =function() {
//     console.log('I am Common Methode')
// }

// function Square(width , color){
//     Shape.call(this, color) // Super Call in JavaScript
//     this.width = width
// }

// Extend(Shape, Square)
// // Square.prototype = Object.create(Shape.prototype)// Inharetance
// // Square.prototype.constructor = Square // Reset Constructor

// Square.prototype.draw = function (){
//     console.log('Drawing')
// }
// Square.prototype.Common = function(){
//     console.log('I am Calling from Square and I have overidden')
// }

// // var shape = new Shape()
// var sqr = new Square(45, 'green')

// // shape -> Shape -> Object
// // sqr -> Square -> Object

// // sqr -> Square -> Shape -> Object


// function Circale(radius, color){
//     Shape.call(this,color)
//     this.radius = radius
// }
// Extend(Shape, Circale)
// Circale.prototype.Common = function(){
//     // Shape.prototype.Common.call(this)
//     console.log('I am Calling from Circale and I have overidden') // Method Overriding 
// }
// var c = new Circale(6, 'Black')

// var s = new Shape('Purple')

// var shapes = [s , c, sqr]

// for(var i of shapes){      // Polymorphism
//     i.Common()
// }

function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function(){
        console.log('Walking......')
    }
}

var canEat = {
    eat: function (){
        console.log('Eatting.....')
    }
}

var canSwim = {
    swim: function(){
        console.log('Swimming....')
    }
}

// var Person = Object.assign({}, canWalk, canEat)
function Person(name){
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)

mixin(Person.prototype, canWalk, canEat)
var person = new Person('HM Nayem')
console.log(person)

function GoldFish(name){
    this.name = name
}
mixin(GoldFish.prototype,canEat, canSwim)

var fish = new GoldFish('Chu Chu Chu')
console.log(fish)