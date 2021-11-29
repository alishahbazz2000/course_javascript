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
    *) Management runtimeError or exceptions
    *) block try/catch/finaly
    *) For all built-in errors, the error object has two main properties:
    1) name      --->(return )Error name. For instance, for an undefined variable that’s "ReferenceError".
    2) message --->(return ) Textual message about error details.

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
//*)  “Throw” operator
/*
    *) The throw operator generates an error.
    *) The syntax is:
    throw <error object>
*/
//==============================================================================
//*) create Error
/*
    *)  we can use anything as an error object. 
    *) syntax

    let error = new Error(message);
    ----- or
    let error = new SyntaxError(message);
    let error = new ReferenceError(message);

    ----for example
    let error = new Error("Things happen o_O");
    
    alert(error.name); // Error
    alert(error.message); // Things happen o_O
*/
//==============================================================================
