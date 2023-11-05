// Anonymous function


var addition = function(a , b){
    return a + b
}

addition(10 , 30)

setTimeout(function(){
    console.log('I will call after 5 seconds')
}, 5000)

var another = addition
console.log(another(6 , 7))