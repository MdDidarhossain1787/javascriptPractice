// Object in Javascript

//  Object : Object is a datastructuer in Javascript which we can store multipule data and creat a name

// var obj = {}
// obj.x = 10

// console.log(obj)
// console.log(typeof obj)
// console.log(obj)
//  (Literal)
// var point = {
//     x : 10,
//     y : 20
// }
// point. z = 30

// console.log(point)

//  ( Object Constructor)

// var obj = Object()
// obj. a = 10
// console.log(obj)

// var obj2 = new Object()
// obj2. b = 20
// console.log(obj2)

// Dot notation

var point = {
    x : 10,
    y : 20,
    z : 15
}
point.a = 16
// console.log(point.x)
// console.log(point.y)
// console.log(point.x + point.z)

// console.log(point['x'])

// var show = 'x'
// console.log(point[show])
var prop = 'z'
point[prop] = 55
console.log(point)

point.a = undefined
console.log(point)
delete point.a
console.log(point)