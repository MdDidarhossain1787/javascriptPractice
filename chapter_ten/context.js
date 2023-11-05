// Execution Context

function a (){
    b ()
    console.log( ' I am Function A')
} 

function b (){
    d ()
    console.log(' I am function B')
}
function c (){
    console.log(' I am function C')
}
function d (){
    c ()
    console.log(' I am function D')
}

var x = 100

a()
console.log(' I am Global')

// Execution of C function context
// Execution of D function context
// Execution of Bfunction context
// Execution of A function context
// Execution of Global context