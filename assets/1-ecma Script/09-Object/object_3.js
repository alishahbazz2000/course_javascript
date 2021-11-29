//*)  continue object

//==============================================================================
//*) sort default key in object
/*
    *) This happens if the key is in the form of a number
    *) If the key is in the form of a number, they are automatically arranged in a trap

    let info = {
        10 : "ila",
        2: "zabhahs",
        3: 12
    }
    console.log(info)
    ------- return -----
    {2: "zabhahs" , 3: 12 , 10 : "ila", }
*/ 
//==============================================================================
//*) Dynamic Property Access & Setting Properties Dynamically
/*
    *) We can use the value of a variable as a key in an object

    let country = "Iran"
    let obj = {
        country : "IRAN",
        [country] : "best"
    }

    console.log(obj)
    ----> {country : "IRAN", "Iran" : "best"}

    conosole.log(obj.country)   --->(return) "IRAN"
    console.log(obj['Iran'])     --->(return) "best"

*/
//==============================================================================
