//* Datetype  Number

//==============================================================================
/* 
    1) let num_one = 5              --->  typeof = number
    2) let num_two = 5.3           --->  typeof = number
    3) let num_three = 5.3364  --->  typeof = number
*/
//==============================================================================
//*) sum number and string
/* 
    let name_one = 10
    let name_two = "20"
    console.log(name_one + name_two ) ---> (result) 1020
*/
//==============================================================================
//*) casting
/*
    Conversion datetype to the datetype other

    let name = "20.33"            --->  datatype(string)
    name = parseInt(name)     --->  datatype(string)
    console.log(name)              --->  (result) 20

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

    let  result_one   =    Number(num_one)                                  ---> NaN (not a number But datatype equal number)

    let  result_two   =   parseInt(num_one)         ---> (result) 20 
    
    let  result_three   =   parseFloat(num_one)    ---> (result) 20.23

    or

    let name_two = "20.23"
    let result_one = Number(name_tow)  --> (result and datatype number) 20.23 

*/
//==============================================================================
//* infinity in number 
/* 
    let x = 10
    let y = 0
    let result = 10 / 0                         ---> (result )  infinity
    console.log(typeof(result))            ---> number

    **)) method isFinite() It comes to check if the amount of -- infinity -- was equal to false if not true

    let result_two    = isFinite(10 / 0)  ---> false
    let result_three = isFinite(10 / 2)  ---> true

*/
//==============================================================================
//*) 
/*
    *) Numeric conversion happens in mathematical functions and expressions automatically.(except +)

    console.log("6"/ "2") -->(return) 3
    console.log("6"* "2") -->(return) 12
    console.log("6" - "2") -->(return) 3
    console.log("6"%"2") -->(return) 0
    console.log("6"+"2") -->(return) 63  (concatination)

    *) String concatenation with binary +

    1) let number_one = 1 + 2 + "3"
    console.log(number_one)  --->(return)  "33"
    2) let number_two = 1 + "2" + 3
    console.log(number_one)  --->(return) "123"
    3) let number_three = "1" + 2 + 3
    console.log(number_one)  --->(return) "123"
*/
//==============================================================================
//*) convert to Number
/*
    1) undefined   --> 	NaN
    2) null   --> 		0
    3) true   -->  1
    4) false  --> 0
    4) string   -->   Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

    let name_one = "    "
    console.log(Number(naem_one))  --> 0

    let name_two = "10"
    console.log(Number(name_two))  --> 10

    let name_three  = "10ali"
    console.log(Number(name_three))   --> NaN

    ----- two
    console.log( null > 0 )     --->(reutnr) false
    console.log( null == 0 )   --->(reutnr) false
    console.log( null >= 0 )   --->(reutnr) true 

    console.log( undefined > 0 )     --->(reutnr) false
    console.log( undefined == 0 )   --->(reutnr) false
    console.log( undefined >= 0 )   --->(reutnr) false 


*/
//==============================================================================
