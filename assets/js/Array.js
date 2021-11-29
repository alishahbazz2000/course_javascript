//* Array in javascript

//==============================================================================
/*
    *) syntax
    
    const array_one = [1,2,5,3]
    const array_two = Array(1,2,3,4,5,6)

    const array = [1,2,3,1,4,5,6]
    console.log(Array.isArray(array))


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

*/
//==============================================================================
