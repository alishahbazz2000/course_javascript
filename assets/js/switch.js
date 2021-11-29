//*)  condition switch in javascript

//======================================================
//* syntax and introduction
/*
    *) Bet on an input value
    *) syntax

    switch (varible) {
        case value one : {
            code 
            break;
        }
        case value two : {
            code
            break;
        }
        default:{
            code
            break;
        }
    }

    ------or --------------
    switch (varible) {

        case value one : 
            code 
            break;

        case value two : 
            code
            break;
            
        default:
            code
            break;
    }
    -----------------------------------
    let number = 10
    switch(number){
        case 20 : {                           -----> if(number == 20)
            console.log("best number")
            break;
        }
        case 15 : {                          -----> else if(number == 15)
            console.log("normal number")
            break;
        }
        case 10 : {                          -----> else if(number == 10)
            console.log("bad number")
            break;
        }
        defult: {                              ----->  else
            console.log("not number ! ")
            break;
        }
    }
    ------or --------------

    let number = 10
    switch(number){
        case 20 :                           -----> if(number == 20)
            console.log("best number")
            break;

        case 15 :                          -----> else if(number == 15)
            console.log("normal number")
            break;

        case 10 :                          -----> else if(number == 10)
            console.log("bad number")
            break;

        defult:                              ----->  else
            console.log("not number ! ")
            break;
        
    }
*/
//======================================================
//*)  Intermediate or bet on
/*
    let name = 19.5
    switch (name) {
        case (x < 6) : {
            console.log("less than six")
            break;
        }
        case (x < 10) : {
            console.log("between 6 and 10")
            break
        }
        case (x < 16) : {
            console.log("between 10 and 16")
            break
        }
        default: {
            console.log("non")
            break;
        }
    }

*/
//======================================================
