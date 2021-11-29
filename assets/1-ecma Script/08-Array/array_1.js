//* Array in javascript

//==============================================================================
/*
    *) syntax
    
    const array_one = [1,2,5,3]
    const array_two = Array(1,2,3,4,5,6)

    const array = [1,2,3,1,4,5,6]
    console.log(Array.isArray(array))

    *) syntax seprate
    let array_nem = [values sperate ',' ]
    let name = ['ali','sara','hassan','mohamd']

    *)added new value
    name[4] = 'nima'
    console.log(name) ---->(return) ['ali','sara','hassan','mohamd','nima]

    *) updated new value
    name[0] = 'reza'
    console.log(name) ---->(return) ['reza','sara','hassan','mohamd','nima]

    *) get a value with index (start index as 0 until  n - 1)
    console.log(name[2])     ----> (return) "hassan"
    console.log(name[-1])    ----> (return) "nima"

    *) typeof array
    console.log(typeof name)  ----> (return)  object

    *) print Total array
    for (let i = 0 ; i < name.length ; i ++){
        console.log(name[i])
    }

*/
//==============================================================================
//*) A cool case
/*
    let data = Array(5,2)
    console.log(data)      ---->(return) [5,2]

*/
//==============================================================================
//*) Array.of()
/*
    let data_one = Array.of(3,4)
    console.log(data_one)            --->(return) [3,4]
*/
//==============================================================================
//*) Array.from()
/*
    let data_one = Array.from([1,2,3,4,5])
    console.log(data_one)                           ---->(return) [1,2,3,4,5]

    let data_two = Array.from("hi")
    console.log(data_two)                          ---->(return) ["h","i"]

    let data_three = Array.from("ali")
    console.log(data_three)                       ---->(return) ["a","l","i"]
*/
//==============================================================================
//*) create empty array With a specified number of index (value = undefined)
/*
    let array_empty = Array(5)
    console.log(array_empty)   
    --->(return) [undefined, undefined, undefined, undefined, undefined]
*/
//==============================================================================
//* list (Similar array but Different value )
/*
    let name = [1,2,3,"ali","hassan",true]
 */
//==============================================================================
//*) Array navigation
/*
    let name = [1,2,3,4,5,6]
    for(let i = 0 ; i< name.length , i++){
        console.log(name[i])
    }
*/
//==============================================================================
//*) nested array
/*
    let array = ["shahbaz",[1,2,3],"ali"]
    console.log(array[0][1])                 --->(return) "h"
    console.log(array[1][2])                 --->(return)  3
*/
//==============================================================================
//*)  array associative
/*
    *) Arrays whose index value is custom

    let name = []
    name['firstName'] = "ali"
    name['lastName']  = "shahbaz"
    console.log(name)

*/
//==============================================================================
//*) copy array
/*
    let  data = [1,2,3,4,5,6]
    let result = data

    console.log(data)                    ----->(return) [1,2,3,4,5,6]
    console.log(result)                  ----->(return) [1,2,3,4,5,6]
    console.log(data == result)      ----->(return) true
    console.log(data === result)    ----->(return) true

    result.push(200)
    console.log(data)                    ----->(return) [1,2,3,4,5,6,200]
    console.log(result)                  ----->(return) [1,2,3,4,5,6,200]

*/
//==============================================================================
//*) Multidimensional arrays
/*
    *) Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log( matrix[1][1] ) ----->(return)  the central element
*/
//==============================================================================
