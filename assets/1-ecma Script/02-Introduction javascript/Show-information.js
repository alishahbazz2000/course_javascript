//* show information mode

//==============================================================================

/*
 *) method for show information

    1)  alert()
    2) console.log()
    3) document.write()
    4) propmt()
    5)  confirm()
    6) console.table()
    7) console.dir()
*/
//==============================================================================

/* 
    *alert() --> box model  -- Test mode to capture or display data

*/
//==============================================================================

/*
    * console.log()  --> show in console inspectElement

    *)The background color of the console can be changed  ---> with %c

    let name = "ali shahbaz"
    console.log("%c "+ name , "background:black ; color:white")
    console.log("%c" + data for show , "css")
*/
//==============================================================================

/*
    * document.write()  --> Referring to dom --  date to document end html
*/
//==============================================================================

/*
    * propmt() ---> get value to the user

    propmt(message for show  , default value )
    prompt("welcome please inter your age" , 18)
    prompt("welcome please inter your age")

    datatype result propmt ----> string

    *) get value for user
    (number)
    let number = Number(propmt("please inter your number:  " , 10))
*/
//==============================================================================

//* console.table()
/*
    *) show key and value in the form of  table
    *) Used in array and object

    let name = ['ali','hassa','babk','javad','sara']
    console.table(name)
*/
//==============================================================================
//*)  confirm()
/*
    *) The function confirm shows a modal window with a question and two buttons: OK and Cancel.
    *) return true or false

    let isBoss = confirm("Are you the boss?");
    console.log( isBoss )  --->(return) true if OK is pressed

*/
//==============================================================================



