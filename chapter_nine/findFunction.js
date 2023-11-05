var arr = [7 , 4, 8, 2, 9 ,5, 2, 6, 1, 3]
// var result = arr.find(function( value){
//     return value == 9
// } )
// console.log(result)
var result = arr.findIndex(function(value){
    return value == 9
})
console.log( result)