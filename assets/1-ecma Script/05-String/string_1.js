// *)Datetype String
//==============================================================================
//*)  How to define string
/* 
    1) single cotation ''
    2) double cotation ""
    3) template string  ``  (`${place varible in string}`)
    4) defined class String
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
//*) Special characters
/*
    *) In the  string , these have a special meaning and concept
    1) \n  ---->   	New line
    2) \r    ---->  	Carriage return: not used alone. Windows text files use a combination of two characters \r\n to represent a line break.
    3) \', \"    ---->  	Quotes
    4)  \\    ---->  	Backslash
    5)  \t    ---->  	Tab
    6) \b, \f, \v    ---->  	Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays.
*/
//==============================================================================
//*) error cotation
/*
    console.log("I"m ali shahbaz")    --> error
    console.log("I\"m ali shahbaz")  ---> I"m ali shahbaz

*/
//==============================================================================
//*)  Strings are immutable
/*
    *) Strings can’t be changed in JavaScript. It is impossible to change a character.

    let str = 'Hi';

    str[0] = 'h'; // error
    console.log(str[0]) ---> "H"

    ------- Solution to create a new string
    let str = 'Hi';
    str = 'h' + str[1]; // replace the string
    console.log( str ); // hi 
*/
//==============================================================================
//*) The bitwise NOT trick
/*
    alert( ~2 ); // -3, the same as -(2+1)
    alert( ~1 ); // -2, the same as -(1+1)
    alert( ~0 ); // -1, the same as -(0+1)
    alert( ~-1 ); // 0, the same as -(-1+1)
*/
//==============================================================================
//*) Comparing strings
/*
    *) As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order.
    *) According to code ascii

    console.log( 'a' > 'Z' )   ---->(return) true

*/
//==============================================================================
