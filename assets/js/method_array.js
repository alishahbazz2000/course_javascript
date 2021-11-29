// *)  method array in javascript

//==============================================================================
//* 1) length
/* 
    *) Returns the count of indes
    
    let name = [1,2,3,4,5,6]
    console.log(name.length) ---> (return)  6
*/
//==============================================================================
//* 2) Array.isArray()
/* 
    *)  class Array
    *) Checks if this variable is present or not
    *) return true or false
    
    let name = [1,2,3,4,5,6]
    console.log(Array.isArray(name)) ---> (return)  true
*/
//==============================================================================
//* 3) instanceof
/*
    *) Checks if this is an example of a  class Array
    *) return true or false

    let name = [1,2,3,4,5,6]
    console.log(name instanceof Array) ---> (return)  true

*/
//==============================================================================
//*  4) toString()
/*
    *) convert date as list to the string
    
    let name = [1,2,3,4,5,6]
    le result = name.toString()
    console.log(result)                --->(return) "1,2,3,4,5,6"
    console.log(typeof result )   --->(return) string

*/
//==============================================================================
//*  5) pop()
/*
    *)  remove index from the end  array
    *)  Returns the deleted value
    
    let name = [1,2,3,4,5,6]
    let result = name.pop()
    console.log(result)       --->(return) 6
    console.log(result)       --->(return) [1,2,3,4,5]
*/
//==============================================================================
//*  6) push(value)
/*
    *) added value from the end array

    let name = [1,2,3,4,5]
    name.push(100)
    console.log(name)        ----> (return) [1,2,3,4,5,100]

    ------- or 

    let name = [1,2,3,4,5]
    name[name.length] = 200
    console.log(name)          ---->(return)  [1,2,3,4,5,200]
*/
//==============================================================================
//*  7) unshift(value)
/*
    *) added value from the end array

    let name = [1,2,3,4,5]
    name.unshift(100)
    console.log(name)     --->(result) [100,1,2,3,4,5]
*/
//==============================================================================
//*  8) shift()
/*
    *) remove value from the start array

    let name = [1,2,3,4,5]
    name.shift()
    console.log(name)        --->(result) [2,3,4,5]
*/
//==============================================================================
//*  9) splice()
/*
    *)  Add or remove from anywhere in the array
    *) splice(start_index , count remove value , one or more value)
    *) added and remove one or more value
    
    let name = [1,2,3,4,5,6]
    name.splice(1,2,200,400,600)
    *) start index = 1 and remove 2 next index (2,3) and added as index 2 value 200,400,600
    console.log(name)  --->(return) [ 1, 200, 400, 600, 5, 6 ]

    or 

    let  name = [1,2,3,4,5,6]
    name.splice(2,4)
    console.log(name)   --->(return) [ 1,2 ]
*/
//==============================================================================
//*  10) concat()
/*
    *) 
    let array_one  = [1,2,3,4,5,6]
    let array_two = [100,200,300]
    let array_three = array_one.concat(array_two)
    console.log(array_three)       ---->(return) [1,2,3,4,5,6,100,200,300]
*/
//==============================================================================
//* 11) slice(start_index , end_index)
/*
    *) 
    
    let array = [1,2,3,4,5,6]
    let array_one = array.slice(2,4)
    console.log(array_one)      --->(return) [3,4]
*/
//==============================================================================
//* 12) sort()
/*
    *) Sort array values

    **)))This method sorts by ASCII code

    let data = [5,66,8,0,1,11,13]
    console.log(data)                 ----->(return) [5, 66, 8, 0, 1, 11, 13]

    let new_array = data.sort()
    console.log(new_array)       ----->(return) [0, 1, 11, 13, 5, 66, 8]

    -------------  or -------------------------------------

    **)) Sort by smallest value

    let name = [70,7,77,27,270,1,0,00,11,12,120]
    console.log(name.sort((a , b) => a  - b)) 
    ----> (return)  Array(11) [ 0, 00, 1, 7, 11, 12, 27, 70, 77, 120, 270]

    **)) Sort by largest value

    let name = [70,7,77,27,270,1,0,00,11,12,120]
    console.log(name.sort((a , b) =>b- a))
    ----> (return) Array(11) [ 270, 120, 77, 70, 27, 12, 11, 7, 1, 0, 00 ]
*/
//==============================================================================
//* return big value in array
/*
    let name  = [1,2,3,4,5,6]
    console.log(Math.max.apply(null, name)) ---> (return) 6

*/
//==============================================================================
//* return small value in array
/*
    let name  = [1,2,3,4,5,6]
    console.log(Math.min.apply(null, name)) ---> (return) 1

*/
//==============================================================================
//*  13) indexOf()
/*
    let name = [1,2,3,4,5,6]
    console.log(name.indexOf(3))       --->(return) 2
*/
//==============================================================================
//*  13) lastIndexOf()
/*
    let name = [1,2,3,4,5,3,6]
    console.log(name.lastIndexOf(3))  --->(return) 5
*/

