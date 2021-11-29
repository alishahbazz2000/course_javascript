//*  if _  else _ else if in javascript

//==============================================================================
//*) if
/*
    *) syntax
    *) if ---> condition ===>  true
    *) We have only one if in each condition

    if(condition  equla true){
        code
    }

    let name = 10
    if (name === 10){
        console.log("ok")
    }
    ----->(return) "ok"

    ------ and  --------------

    let name = 20
    if (name === 10){
        console.log("ok")
    }
    ----->(return) nothing(name !== 10)
*/
//==============================================================================
//*) if and else
/*
    *) We have only one if and else in each condition

    if(condition  equla true){
        code
    }else{
        code
    }

    let name = 10
    if (name === 10){
        console.log("ok")
    }
    else{
        console.log("no equla")
    }
    ----->(return) "ok"

    ------ and  --------------

    let name = 20
    if (name === 10){
        console.log("ok")
    }
    else{
        console.log("no equla")
    }
    ----->(return) "no equla"

*/
//==============================================================================
//*) if and else and else if 

/*
    *) We have only one if and else in each condition
    *)But we have as many --  else if()  -- as we want

    *) syntax

    if(condition equla true){
        code
    }
    else if(condition equla true){
        code
    }
    else{
        code
    }
    ----------------------------------------------
    let name = 10
    if(name == 10){
        console.log("hello")
    }
    else if(name == 12){
        console.log("goodmorning")
    }
    else{
        console.log("goodbye")
    }
    -------->(return) "hello"
    ***************************
    let name = 12
    if(name == 10){
        console.log("hello")
    }
    else if(name == 12){
        console.log("goodmorning")
    }
    else{
        console.log("goodbye")
    }
    -------->(return) "goodmorning"
    ***************************
     let name = 16
    if(name == 10){
        console.log("hello")
    }
    else if(name == 12){
        console.log("goodmorning")
    }
    else{
        console.log("goodbye")
    }
    -------->(return) "goodbye"
*/
//==============================================================================
//*)  nested if 
/*
    *)  nested if just inside block if
    
    let name = 'ali'
    let age   = 20
    if(name == "ali"){
        if(age == 20){
            console.log("yes hello name is true and age is true")
        }
        else{
            console.log("name is true and age is false")
        }
    }else{
        console.log("name is false and age is false")
    }


    ---------------- best way --------------------------
    *) The best way to Prevent nested if use and (&&)

    let name = 'ali'
    let age   = 20
    if(name == "ali" && age == 20){
            console.log("yes hello name is true and age is true")
    }else{
        console.log("name is false or age is false")
    }
*/
//==============================================================================
//*)  if Single line
/*
    *) if and else

    condition ? true : false;

    let name  = 10
    name == 10 ? console.log("yes") : console.log("no"):
    ---->(return)  "yes"
*/
//==============================================================================
//*)  Multiple ‘?’
/*
    let age = prompt('age?', 18);

    let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

    alert( message );

*/
//==============================================================================
//*) 
/*
    let name = 20
    let result = name < 100
    console.log(result)  ---->(return) true
*/
//==============================================================================
