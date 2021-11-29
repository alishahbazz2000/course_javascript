//*) Events for Form

//==============================================================================
//*) e.target.value
/*
    ----------  html  ----------------------
    <form action="#" id="form-task" method="post">
            <input id="input-task" type="text" />
        <input type="submit" value="submit" />
    </form>

    ----------  javascript  ----------------------
    let  task = docuemnt.getElementById("form-task")
    task.addEventListener("keydowm" or "keyup",function(e) {
        console.log(e.target) 
        console.log(e.target.value)  **
        console.log(e.target.className)
        console.log(e.target.id)
    })

*/
//==============================================================================
