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

// let s1 = Symbol()
// let s2 = Symbol('test symbol')
// console.log(s1)
// console.log(s2)
// console.log(s1 == s2)

// Iterator 

// const arr = [1 , 2, 3]

// for(let i = 0; i < arr.length; i++){
//     console.log(i)
// }

// function createIterator(collection){
//     let i = 0
//     return {
//         next() {
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.dir(iterate.next)

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// console.log(arr[Symbol.iterator])


// let str = 'Text'

// let iterateText = str[Symbol.iterator]()

// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

// For of Loop (Object must be Iterable )
// const arr = [10 , 22, 35]
// for (let v of arr){
//     console.log(v)
// }

// for(let v of 'HM Nayem'){
//     console.log(v)
// }

// let obj = {
//     a: 10, 
//     b: 20
// }

// for(let v of obj){
//     console.log(v)
// }

// Generator in JS

// let obj = {
//     start: 1, 
//     end: 5,
    // [Symbol.iterator]: function(){
    //     let currentValue = this.start
    //     const self = this
    //     return{
    //         next(){
    //             return{
    //                 done: currentValue > self.end,
    //                 value: currentValue > self.end ? undefined: currentValue++
    //             }
    //         }
    //     }
    // }
//     [Symbol.iterator]: function* (){
//         let currentValue = this.start
//         while (currentValue <= this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate (){
//     yield 1
//     yield 2
//     yield 3
// }

// function* generate(collection){
//     for(let i = 0; i < collection.length; i++){
//         yield collection[i]
//     }
// }

// let it = generate([])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function isIterable(obj){
//     return typeof obj[Symbol.iterator] == 'function'
// }

//  Set In JS (ES6) 

// let set = new Set([1, 2, 3])
// console.log(set)

// set.add(4)
// set.add(5)
// set.add(1)
// set.add(2)
// console.log(set)
// console.log(set.size)
// console.log(set.has(5))
// console.log(set.keys())
// console.log(set.values())

// let KeyIterate = set.values()
// console.log(KeyIterate.next())

// console.log(isIterable(set))

// for (let v of set){
//     console.log(v)
// }

// console.log(set.entries())

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)
// map.delete('c')
// map.set({name: 'HM Nayem'}, 45)

// console.log(map.size)
// console.log(map)
// console.log(map.get('a'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// for(let [k , v] of map){
//     console.log(v, k)
// }

// map.forEach((v, k) => {
//     console.log(k , v)
// })

//  Weak Set 

// let a ={a: 10}, b ={b: 20}

// let set = new Set([a , b])
// a = null

// console.log(set)

// let arr = [...set]
// console.log(arr)

// let weakSet = new WeakSet([a,b])
// a = null
// console.log(weakSet.has(a))


// Weak Map

// let weakMap = new WeakMap([[a, 45] , [b, 75]])
// a = null

// console.log(weakMap.get(a))

// function Rectangle (width, height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function(){
//     console.log(this)
//     console.log('Drawing.....')
// }

// let rect1 = new Rectangle(12, 15)

// class Rectangle {
//     constructor(width , height){
//         this.width = width
//         this.height = height
//     }
// name = 'HM Nayem'
// test2 = function(){

// }

//     draw(){
//         console.log('Drawing...')
//     }

//     test (){

//     }
// }

// let rect1 = new Rectangle(45, 23)

// console.log(rect1)
// console.log(rect1)


// Class and Class Proparties and Static Method



// class Person{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     print(){
//         console.log(this.name, this.email)
//     }

//     test (){
//         console.log(this)
//     }

//     static create(){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name":"HM Nayem","email":"hasan.m.nayem"}'

// let p1 = Person.create(str)
// console.log(p1)
// console.log(p1 instanceof Person)
// p1.print()

// Private Data and Private Proprties 

// 'use strict'

// function Shape(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.draw
// anotherDraw()

// let test = p1.test

// test()

// Private Data 

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()

// class Circle{
//     constructor(radius,name){
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_draw](){
//         console.log('Drawing....')
//     }
// }

// let c1 = new Circle(2, 'CRED')
// console.log(c1)

// console.log(Object.getOwnPropertyNames(c1))
// console.log(Object.getOwnPropertySymbols(c1)[0])
// let key = Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])

//  Getter And Setter 

// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle{
//     constructor(radius,name){
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, ()=>{
//             console.log(this.size)
//         })
//     }

//     get radius(){
//         return _radius.get(this)
//     }

//     set radius(v){
//         _radius.set(this, v)
//     }

//     draw(){
//         console.log('Drawing....')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()
// c1.radius = 150
// console.log(c1.radius)

// Inheritace 

class Shape{
    constructor(color){
        this.color = color
    }

    draw(){
        console.log('Drawing....')
    }
}

class Rectangle extends Shape{
     constructor(color,width, height){
        super(color)
        this.width = width
        this.height = height
     }

     calculate(){
        return this.width * this.height
     }
}

let r1 = new Rectangle('Green', 4, 5)
console.log(r1)
r1.draw()