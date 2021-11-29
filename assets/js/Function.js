//*)  Function in javascript

//==============================================================================
//*)  function
/*
    *) Each function has two parts
    1)  Define   --> declare
    2)  call       --> Invoke

    1)) Define
        function name_function (paramter){
            return code    (int , string, bool , ....)
            or 
            console.log/console.table, ...  (void)
        }
    2)) call
    name_function(arguments )

    ----------------   example   --------------------- 
    function sum(a , b){
        return a + b ;
    }
    console.log(sum(6,8))
    console.log(sum)
    console.log(typeof(sum))
*/
//==============================================================================
//*) conditon in return funciton
/*
    funciton check(){
        return retuen
    }
    if(sum() === "true"){
        console.log("yes")
    }
*/
//==============================================================================
//*) The calling location and definition of the function need not be in order
/*

    function say_hello(){
        return "Hello my Son"
    }
    console.log(say_hello())
    ------------------------or----------------
    console.log(say_goodbye())
    function say_goodbye(){
        return "goodbye my son"
    }
*/
//==============================================================================
//*) function expeersion
/*
    *)  This function is executed at least once
    (function(){
        console.log("my name is function expersion")
    }())

    *) IIFI => imedeatly invoked functions expersion
    *) Be sure to put open and closed parentheses
    *) We can also give it a parameter as shown below

    (function(name){
        console.log(name)
    }("ali shahbaz"))
*/
//==============================================================================
//*) copy by refrence
/*
    *) If we call a function without parentheses or give a variable without parentheses, its output is the function itself.

    function sum(a , b){
        return a + b
    }
    console.log(sum)
    let func_two = sum
    console.log(func_two)
    ------- reutn two console.log simaller ------
    (return) -->function  sum(a , b){
                        return a + b
                    }
*/
//==============================================================================
//*) arrow function 
/*
    *)

    *) Normally
    let data = function (firstname , lastname, age){
        return `my name is ${firstname} and my lastname is ${lastname} and my age is ${age}`
    }
    *) arrow function
    let data = (firstname , lastname ,age)=> `my name is ${firstname} and my last name is ${lastname} and my age is ${age}

*/
//==============================================================================















