//*)  ErrorHandling in javascript

//==============================================================================
//*) We can specify the type of error
/*
    try{
        code
    }
    catch(name error){
        code
    }
    catch(e){   --> e --> Includes all errors
        code
    }
    finaly{        ---> Are executed in any case
        code
    }

*/
//==============================================================================
//*) syntax errorhandling 
/*
    *) Management runtimeError
    *) block try/catch/finaly

    let number_two = 20
    let number_one = Number(propmt("please inter your naem :  "))
    try{
        let name = number_two/number_one
        console.log(name)
    }
    catch (e){
        console.log("the number_two not zero")
    }
    finaly{
        console.log("goodbye  In any case Runs block catch or try")
    }

    (test_one)--> number_one = 2
    return---->  10  goodbye  In any case Runs block catch or try

    (test_one)--> number_one = 0
    return---->  "the number_two not zero" 
    " goodbye  In any case Runs block catch or try"
*/
//==============================================================================
