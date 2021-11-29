// *)Datetype String
//==============================================================================

/*
    string -->  Insert information into a string
 */
//==============================================================================
//* class String
/*
    let name = new String()
    *) now access to method string
    name.method_string()
    console.log(name instanceof String)  --->(return)  true
*/
//==============================================================================

//*)  How to define string
/* 
    1) single cotation ''
    2) double cotation ""
    3) template string  ``  (`${place varible in string}`)
*/
//==============================================================================
/*
    *)  concatenation in string( + ) --> sum two or more strings

    let firstname = "ali"
    let lastname = "shahbaz"
    console.log(firstname + lastname) ---> (results) alishahbaz
*/
//==============================================================================
//*)  convert number to string
/*
    **)) method String() and .tostring() convert datatype number to datatype string

    let x_one  = 20.23;                            --->(typeof number)

    let result_one  = String(x)                --->(typeof string)   "20.23"
    let result_two = x_one.tostring()      ---> (typeof string)  "20.23"
    
 */
//==============================================================================
//* convert string to number
/*
    **)) method  parseInt() and parseFloat() and Nummber()   convert datetype string to number

    let num_one =   "20.23ali"

    let  result_one   =    Number(num_one) --->  NaN (not a number But datatype equal number)
    let  result_two   =   parseInt(num_one)     ---> (result) 20 
    let  result_three   =   parseFloat(num_one)  ---> (result) 20.23

    or

    let name_two = "20.23"
    let result_one = Number(name_tow)  --> (result and datatype number) 20.23 

*/
//==============================================================================
//*) string ---> array character
/* 
    *) start index character as 0

    let name = "ali shahbaz"
    console.log(name[1])       --->(result)    l
    console.log(name[-1])      --->(result)   z
    console.log(name[5])      --->(result)    s

*/
//==============================================================================
//* string length
/*
    *)  Returns the number of characters in a string

    **)) space is character 

    let name = "ali shahbaz"
    let count = name.length
    console.log(count)         --->(result)  11

*/
//==============================================================================
