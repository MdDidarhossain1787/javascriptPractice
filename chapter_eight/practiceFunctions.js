
// function functionName(){
//     console.log('I am a function')
// }

// function add(){
//     var a = 10 
//     var b = 20 
//     console.log(a + b)
// }

// function sub(){
//     var a = 50
//     var b = 20 
//     console.log(a - b)
// }

// for(var i = 0; i < 10; i++){
//     functionName()
// }
// add() 

// Parameter

// function add (a, b){
//     var result = a + b
//     console.log(result)
// }

// add(5, 6)


// var arr1 = [1 , 5, 7]
// var arr2 = [5 , 7, 9]
// var arr3 = [9 , 7, 1]

// function sumOfArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i ++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

// Arguments 

// function test(a , b, c){
//     // console.log(arguments)
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// test(10 , 20, 30)

// function test(a , b, c){
//     console.log(JSON.stringify(arguments))
// }
// test()

// Arguments Object

// function sumAll(){
//     var sum = 0
//     for(var i = 0; i < arguments.length; i ++){
//         sum += arguments[i]
//     }
//     console.log(sum)
// }
// sumAll(1 , 2, 3, 4)
// sumAll(1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10)

//  Return Something in Functions

function sumAll(){
    var sum = 0
    for(var i = 0; i < arguments.length; i ++){
        sum += arguments[i]
    }
    console.log(sum)
}
// sumAll(1 , 2, 3, 4)
// sumAll(1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10)
var a = sumAll(1 , 2, 3, 4)
var b = sumAll(1 , 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(a , b)