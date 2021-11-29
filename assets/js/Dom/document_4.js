//*) dom method 

//==============================================================================
//*) 1) className
/*
    *) Rename the class of a tag
    *) Deletes previous classes of tags and replaces new ones

    --> <div id="myapp" className="content text-center bg-info"></div>
    let result = docuemt.getElementById("myapp")
    result.className = "container"
    ---> div id="myapp" className="container"></div>
*/
//==============================================================================
//*) 1) classList
/*
    *) add class end class tag
    
    --> <div id="myapp" className="content text-center bg-info"></div>
    let result = docuemt.getElementById("myapp")
    result.classList = "container"
    ---> div id="myapp" className="content text-center bg-info container"></div>

    *1) add class
        --> <div id="myapp" className="content text-center bg-info"></div>
        let result = docuemt.getElementById("myapp")
        result.classList.add("myapp")
        --> div id="myapp" className="content text-center bg-info myapp"></div>


    *2) remove class
        --> <div id="myapp" className="content text-center bg-info"></div>
        let result = docuemt.getElementById("bg-info")
        result.classList.remove("myapp")
        --> <div id="myapp" className="content text-center"></div>
*/
//==============================================================================
//*) setAttribute
/*
    *) Changes the properties of a tag
    *) setAttribute("attribute","value attribute")

    let demo = document.getElementById("demo")
    demo.setAttribute("href","www.google.com")
*/
//==============================================================================
//*) getAttribute
/*
    *) Returns the attribute we give it from an element

    let demo = document.getElementById("demo")
    let result=  demo.getAttribute("class")
    console.log(result)  --> (return) class tag with id ="demo"
*/ 
//==============================================================================
//*) hasAttribute
/*
    *) Checks if that element has such a feature or not
    *) return true or false

    let demo = document.getElementById("demo")
    let result = dome.hasAttribue("id")
    console.log(result)  --->(return) true
*/
//==============================================================================
