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

    let  result_one   =    Number(num_one) --->  NaN (not a number But datatype equal number)

    let  result_two   =   parseInt(num_one)     ---> (result) 20 
    
    let  result_three   =   parseFloat(num_one)  ---> (result) 20.23

    or

    let name_two = "20.23"
    let result_one = Number(name_tow)  --> (result and datatype number) 20.23 

*/
//==============================================================================
//* infinity in number 
/* 
    let x = 10
    let y = 0
    let result = 10 / 0                  ---> (result )  infinity
    console.log(typeof(result))    ---> number

    **)) method isFinite() It comes to check if the amount of -- infinity -- was equal to false if not true

    let result_two    = isFinite(10 / 0)  ---> false
    let result_three = isFinite(10 / 2)  ---> true

*/
//==============================================================================
