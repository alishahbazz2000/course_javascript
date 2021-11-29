//*) dom method 

//==============================================================================
//*)  1) innerText
/*
    *) Change the content inside the tag
    *) It puts everything in it, not the result
    

    let result = document.getElementById("myapp")
    result.innerText = "my name is ali"   --->(return) "my name is ali"
    result.innerText = "<h1>welcome to my website</h1>"
    ----->(return) "<h1>welcome to my website</h1>"

    *) Return the content inside the tag

    let result = documet.getElementById("myapp")
    console.log(result.innerText)

    *) It can only return the value inside a tag
    let result = doucment.getElementByTagName("h1")
    console.log(result.innerText)  --> (retuen) undefined Because result is collection
    ---------------  but
    console.log(result[0].innerText)  -->(return) value inside first tag h1
*/
//==============================================================================
//*) 2) innerHTML
/*
    *) Change the content inside the tag
    *) It puts everything in it, the result is not itself

    let result = document.getElementById("myapp")
    result.innerHTML = "my name is ali"   --->(return) "my name is ali"
    result.innerHTML = "<h1>welcome to my website</h1>"
    ----->(return) "welcome to my website"

    *) Return the content inside the tag

    let result = documet.getElementById("myapp")
    console.log(result.innerText)

    *) It can only return the value inside a tag
    let result = doucment.getElementByTagName("h1")
    console.log(result.innerText)  --> (retuen) undefined Because result is collection
    ---------------  but
    console.log(result[0].innerText)  -->(return) value inside first tag h1

    *------------------------------------------------------>
    *) More innerText is used than innerHTML 
*/
//=============================================================================='///*) 3) document.writ()
/*
    *) Adds to the last part body
    
    let result = "my name is ali"
    docuemnt.write(result)
*/
//==============================================================================
//*)  4) textContent
/*
    *) Change the content inside the tag
    *) It puts everything in it, not the result

    let result = document.getElementById("myapp")
    result.textContent = "my name is ali"   --->(return) "my name is ali"
    result.textContent = "<h1>welcome to my website</h1>"
    ----->(return) "<h1>welcome to my website</h1>"
*/
//==============================================================================
