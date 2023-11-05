// var str = ' This is String'
// console.log(str)

//  escape notation

// var str = ' This is a \'String\' '
// console.log(str)

// var str2 = ' This is a \n String '
// console.log(str2)

/********String Comparison*********/
/********Javascript uses Lexicographic system for string compar to string *********/

// var a = ' abc '
// var b = ' acd '

// console.log( a > b)
// console.log( a < b)
// console.log( 'a' > 'Z')

// console.log('001' > 1)

// var a = 'I am '

// var b = 'Didar Hossain'

// var c = a.concat(b)

// console.log(c)

// var d = c.substring(10)
// console.log(d)

// console.log(c.charAt (11))

// console.log(c.startsWith('I am'))
// console.log(c.endsWith('hossain'))
// console.log(c. toUpperCase())
// console.log('       afauifiif    '.trim())
// console.log(b.split(''))

var str = 'Bangladesh'

var length = 0

while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
console.log(length)

console.log(str.length)