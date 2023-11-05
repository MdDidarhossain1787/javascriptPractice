// 1. A function can be stored in a variable 
function add(a , b){
    return a + b
}

var sum = add
console.log(sum(4 , 5))
console.log(typeof(sum))
// 2. A function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5 , 3))
// 3. A function can be stored in an Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7 , 9))
// 4. We can creat function as need
setTimeout(function(){
    console.log('I have created a function......')
}, 500)
// 5. We can pass function as an Argument
// 6. We can return function from Another function


