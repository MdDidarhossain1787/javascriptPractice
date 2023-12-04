// Arrays
// Declarations
// let arr = new Array();

// let fruit = ['Apple' , 'Mango' , 'Orange']

// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])

// mix values

// let arr = ['Apple', {name: 'Didar'}, 'Orange' , {age : 22}, 23,  true, function(){console.log('Hello')}]
// arr[6]();
// console.log(arr[1].name)

// var fruits = ['Apple' , 'Orange', 'plam']
// console.log(fruits)
// same as remove elements
// fruits.shift()
// fruits.unshift('Pear')
// fruits.push('Pear')
// console.log(fruits[fruits.length - 1])
// same as (fruits[fruits.length])
// console.log(fruits.at(-1))
// console.log(fruits.pop())
// console.log(fruits)

// let fruits = [];
// fruits[99999] = 5;
// fruits.age = 25
// console.log(fruits)
//  Loops

// let fruits = ['Apple', 'Orange' , 'Banana', 'Pear']

// for(var i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i])
// }
// let fruits = ['Apple', 'Orange', 'Pear', 'Banana', 'Pine-apple']
// for(var fruit of fruits){
//     console.log(fruit)
// }
// let fruits = ['Apple', 'Orange', 'Pear', 'Banana', 'Pine-apple']
// for(var fruit in fruits){
//     console.log(fruits[fruit])
// }
// Length of Array

// let fruits = []
// fruits[123] = 'Apple'
// console.log(fruits.length)

// let arr = new Array(2)
// // arr [2] 
// console.log(arr[0])
// console.log(arr.length)

// Multidimentional Arrays

// let matrix = [
//     [1 , 2, 3],
//     [4 , 5, 6],
//     [7 , 8, 9]
// ]

// console.log(matrix[1][1])
// let arr = [1 , 2, 3]
// console.log(arr)
// String(arr) == '1,2,3'
// console.log(String(arr) == '1,2,3')


// Type Conversion 

// let value = true
// console.log(typeof value)
// value = String(value)
// console.log(typeof value)

// let str = '123'
// console.log(typeof str)

// var num = Number(str)
// console.log(typeof num)

// Explicit conversion is usually required when we read a value from a string-based source like a text
//  form but expect a number to be entered.
// If the string is not a valid number, the result of such a conversion is NaN. For instance:

// let age = Number(' an arbitray string of a number')
// console.log(age)

// console.log(Number('123'))
// console.log(Number('123z'))
// console.log(Number(true))
// console.log(Number(false))

// let user = {
//     name: "John",
//     age: 30,
  
//     toString() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//     }
//   };
//   console.log(user)

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
//   };
  
//   let json = JSON.stringify(student);
// console.log(typeof json) 
// console.log(json) 

// var a = 'static';

// function f1() {
//    console.log(a);
// }

// function f2() {
//    var a = 'dynamic';
//    f1();
// }

// f2();

// var a = 'easy';

// (function() {
//    var b = 'easy';

//    function f1() {
//       console.log(a, b);
//    }

//    function f2() {
//       var a = 'difficult';
//       var b = 'difficult';
//       f1();
//    }

//    f2();
// })();

// var x = 2
// function exponensioal(result){
//    result = (2 ** x)
//    console.log(result)
// }

// exponensioal()

// console.log(8 ** ( 1 / 3))

// let s = "my" + "string"
// console.log(s)
// console.log('1' + 2)
// console.log( 2 + '1')
// console.log( 2 + 2 + '1')
// console.log('1' + 2 + 2)

// console.log(6 - '2')

// console.log('6' / '2')

// function creation and declearation

// abc()

// function abc(){
//     console.log('I am Function abc')
// }

// abc()

// creational phase
// abc = ref

// executional phase

// abc()

// function abc(){
//     console.log('I am Function abc')
// }

// abc()

// newAbc()
// var newAbc = function(){
//     console.log("I am new Function ABC")
//     console.log("git practice")
//     console.log("git practice with gui")
// }

// newAbc()

// var s = `   akfafjjk
// sjfhfjfj
//      sfskafhsjdf
// asfjasfj alfhawuiytaiwh
// akfhulj     
//             siefoiaefhaeg
//             as`
// console.log(s.trim())

// var age = 20

// var name = 'Didar Hossain'
// console.log('My name is '+ name + 'and I am ' + age  + '  Years old')
// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ' '}adult.`)
// console.log(name.padStart(15))
// console.log(name.padEnd(15,'a'))
// console.log('S'. repeat(10))


// var vs let vs const 


// const a = 10
//  a = 100
//  console.log(a)

// let a = 10 

// a = 100
// console.log(a)

// if(true){
//     let a = 10
// }

// console.log(a)

// for(let i = 0; i < 5; i++){

// }
// console.log(i)




// ES6 Inharetace

class Shape{
    constructor(color){
        this.color = color
    }

    draw(){
        console.log('Drawing....')
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color)
        this.width = width
        this.height = height
    }

    draw (){
        console.log('Drawing a Rectangle....')  // Method Overriding
    }

    calculate(){
        return this.width * this.height
    }
}

let r1 = new Rectangle('Green', 4, 5)
console.log(r1)
r1.draw()