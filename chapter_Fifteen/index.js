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

// Arrow function

// function add(a, b){
//     return a + b
// }

// let add = (a, b) => {
//     return a + b
// }

// let add = (a, b) => a + b

// console.log(add(45, 50))

// let sqr = x => x*x
// console.log(sqr(5))

// function testMe(){
//     console.log(this)
// }
// let obj = {
//     name: 'Didar Hossain',
//     print: () => {
//         console.log(this)
//     }
// }
// testMe()
// obj.print()


// let obj ={
//     name: 'Didar Hossain',
//     print: function(){
//         // console.log(this.name)
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         },100)
//     }
// }

// obj.print()

// function sqr(n=1){
//     return n*n
// }

// console.log(sqr())

// function greet(name, msg){
//     console.log(`${msg} ! ${name}`)
// }

// greet('Didar Hossain', 'Hello')

// function greet(name= 'Didar Hossain', msg = 'Hello'){
//     console.log(name.length)
//     console.log(`${msg} ! ${name}`)
// }

// greet(null, 'Hello')      // if you provite Default parameter , than you can not use null in the outside msg


// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function(){
//         let currentValue = this.start
//         const self = this
//         return {
//             next(){
//                 return{
//                     done: currentValue > self.end,
//                     value:currentValue > self.end ? undefined: currentValue++
//                 }
//             }
//         }
//     }
// }

// for(let v of obj){
//     console.log(v)
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// function sum(...rest){
//    return rest.reduce((a , b) => a + b)
// }
// console.log(sum(1, 2, 3, 4, 5))

// let a = [1 , 2, 3]
// console.log(...a)

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// let obj2 = {
//     ...obj
// }


// let a = 10 , b = 20
// let obj = {
//      a,
//      b,
//      print(){
//         console.log(this)
//      }
// }
// console.log(obj)
// obj.print()


// var person = {
//     name: 'HM Nayem',
//     email: 'hasan.m.nayem@gmail.com',
//     address:{
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// let {name, email, address, address:{city, country} } = person

// console.log(name , email, city, country)

// let arr = [1 , 2, 3, 4, 5]

// let [first, second, , , last] = arr
// console.log(first, second, last)

// var obj = {
//     a: 10,
//     b: 20
// }

// console.log(Object.entries(obj))

// var objArr = [
//     ['a', 10],
//     ['b', 20 ]
// ]
// console.log(Object.fromEntries(objArr))

let s1 = Symbol()
let s2 = Symbol('test symbol')
// console.log(s1)
// console.log(s2)
console.log(s1 == s2)