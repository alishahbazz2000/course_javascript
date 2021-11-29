// *)  NaN in datetype number

//==============================================================================
//*) NaN == (not a number)  There is value (ok) but it has no meaning 
/* 
    
    let x = "20.23"
    let result_one = Number(x)  ---> (result) NaN

    or

    let x = 20
    let y = "ali"
    let result_two = x / y  --->(result)  NaN

    *********)) typeof NaN ==>   number
*/
//==============================================================================
//*) method   isNaN(value)
/* 
    **))  It comes to check if the amount was equal to -- NaN --, if not, it is incorrect


    let x = "20.23ali"
    let result_one = Number(x) 
    isNaN(result_one) ---> (result)  true

    or 

    let x = "20.23"
    let result_one = Number(x) 
    isNaN(result_one) ---> (result)  false

*/
//==============================================================================
