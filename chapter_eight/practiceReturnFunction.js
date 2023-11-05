function sumAll(){
    var sum = 0
    for(var i = 0; i < arguments.length; i ++){
        sum += arguments[i]
    }
    return sum
}
var result = sumAll(1 , 2, 3, 4 , 5, 6, 7)
console.log(result)

function person(name, email){
    return{
        name: name,
        email: email
    }
    console.log('I will never be shown')
}
var p1 = person('Didar', 'hossain@gmail.com')
console.log(p1)