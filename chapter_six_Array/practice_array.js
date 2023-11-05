// var arr = [1 , 2, 3, 4, 5]

// arr[5] = 6

// console.log(arr)
// console.log(arr[0])
// // console.log(arr[7])
// arr[2] = 22
// console.log(arr)
// console.log(arr.length)

//  Travesing Array

// var arr = [8 , 2, 6, 9, 1, 4, 7, 13]

// var sum = 0

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0){
//         sum += arr[i] 
//      }
// }
// console.log(sum)

//  Insert Array

// var arr = [1 , 2, 3, 4, 5, 6, 7, 8]

// Isert 9 to Index 3

// arr[3] = 9
// arr.push(9) ( Element Add in the last index)
// arr.unshift(9) ( Element add in the frist index)
// arr.splice(3 , 0, 9) (Elemrnt add in the perticulaer index)
// arr.pop() (Element remove in the last index)
// arr.shift() (Element remove in the frist index)
// arr.splice(3 , 1)
// arr.splice(3 , 1, 44)

// console.log(arr)

//  Find an element in an Array

var arr = [3 , 6, 2, 1, 16, 7, 8, 9 ,66, 23, 24, 55, 64, 98]
var find = 23
var isFound = false
for(var i = 0; i < arr.length; i++){
    if(arr[i] === find){
        console.log('Data Found at index ' +  i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data not found')
}