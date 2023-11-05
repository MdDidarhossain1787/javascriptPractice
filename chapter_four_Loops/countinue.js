// while(true){
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if(rand == 1){
//         console.log(' Winner Winner Chicken Dinner')
//        break
//     }else{
//         console.log(' You have got ' + rand)
//     }  
// }

// var sum = 0
// for(var i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         console.log(sum + ' + ' + i + ' = ' + (sum + i))
//         sum += i
//     }
// }
// console.log( " Result = " + sum)

/***********Countinue**********/

// for(var i = 0; i < 10; i++){
//     if(i === 3 || i === 7){
//         continue
//     }else{
//         console.log(i)
//     }
// }

// ********** Infinity Loop*********/

for(; ;){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 1){
        console.log(' Winner Winner Chicken Dinner')
       break
    }else{
        console.log(' You have got ' + rand)
    }  
}