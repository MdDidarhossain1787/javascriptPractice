// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am rectangle')
//         this.printProperties()
//     } ,
//     printProperties:function(){
//         console.log('My width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }

// rect.draw()

// // rect.height = 100

// // rect.draw()

// function myFun(){
//     console.log(this)
//     rect.printProperties()
// }

// new myFun()

// var another = {
//     width: 46 ,
//     height: 57 ,
//     print: rect.printProperties
// }
// console.log(another.print)
// another.print()


// Factory Pattern


// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am rectangle')
//         this.printProperties()
//     } ,
//     printProperties:function(){
//         console.log('My width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }

// var creatRact = function(width, height){
//     return {
//         width: width,
//         height: height,
    
//         draw: function(){
//             console.log('I am rectangle')
//             this.printProperties()
//         } ,
//         printProperties:function(){
//             console.log('My width is ' + this.width)
//             console.log('My Height is ' + this.height)
//         }
//     }
// }

// var rect1 = creatRact(10 , 8)

// rect1.draw()

// var rect2 = creatRact(40 , 30)

// rect2.draw()

// var rect3 = creatRact(50, 20)

// rect3.draw()

// Constractor pattern

// var Ractangle = function(width, height){
//     this.width = width
//     this.height = height

//     this.draw = function(){
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// var rect3 = new Ractangle(20, 15)
// rect3.draw()

// function myNew(constractor){
//     var obj = {}
//     Object.setPrototypeOf(obj, constractor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constractor.apply(obj,argsArray.slice(1))

//     return obj
// }

// var rect4 = myNew(Rectangle, 45, 30)
// rect4.draw()


// var obj = {}

// var obj = new Object()

// var str = new String('str')
// console.log('My string is ' + str)

// function test(){
//     console.log('Something')
// }

// console.log(test.name, test.length)


// var Rect = new Function('width', 'height', `this.width = width
//     this.height = height

//     this.draw = function(){
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }`
// )

// var rect5 = new Rect(4, 5)

// console.log(rect5)

// function myFun(c , d){
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }  
// Call  Apply
// Bind

// myFun.call({a: 40, b: 25}, 10, 5)
// myFun.apply({a: 50, b: 30},[ 10, 5])
// myFun.apply({})
// myFun()

// var testBind = myFun.bind({a: 7, b: 9}, 5, 5)
// testBind()

// Pass by Value vs Pass by Reference 
// Call by Value vs Call by Reference


// var n = 10

// function change(n){
//     n = n + 100
//     console.log(n)
// }
// change(n)
// console.log(n)

// var Ractangle = function(width, height){
//     this.width = width
//     this.height = height
//     var position = {
//         x: 55,
//         y: -100
//     }
//     var printProperties = function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }. bind(this)

    // this.getposition = function(){
    //     return position
    // }

//     this.draw = function(){
//         console.log('I am a Rectangle')
//         printProperties()
//         console.log('Position X = '  + position.x + ' Y = ' + position.y)
//     }
// Object.defineProperty(this,'position',{
//     get: function(){
//         return position
//     } ,
//     set: function(Value) {
//         position = Value
//     }
// })
// }

// var rect6 = new Ractangle(65, 75)
// rect6.draw()

// rect6.position = {
//     x : 456,
//     y :-239
// }
// console.log(rect6.position)


// Inheritance

function Person(name){
    this.name = name
}

var p1 = new Person('Didar Hossain')
console.log(p1)