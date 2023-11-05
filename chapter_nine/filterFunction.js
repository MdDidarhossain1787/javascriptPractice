var arr = [5 , 8, 2, 4, 1, 3, 7, 9, 6]

// var filteredArr = arr.filter(function(value){
//     return value % 2 == 1
// })
// console.log(filteredArr)

// function myFilter(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length;i++){
//         if(arr[i] % 2 == 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

function myFilter(arr,cb){
    var newArr = []
    for(var i = 0; i < arr.length;i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
// console.log(myFilter(arr))
console.log(myFilter(arr, function(value){
    return value % 2 == 1
}))

console.log(myFilter(arr, function(value){
    return value > 4
}))