//*) Node , Parent , Child in Dom

//==============================================================================
//*) html 
{
    /* <section id="demo">
        <h1>hello world! </h1>
        <p>lorem</p>
        <a href="#" class="btn btn-success btn-block">click me</a>
    </section> */
}
//==============================================================================
//*)  1) childElementCount
/*
    *) Returns the number of children in a tag
    *) return number

    let demo = docuement.getElementById("demo")
    console.log(demo.childElementCount)    --->(return) 3
*/
//==============================================================================
//*)  2) firstElementChild 
/*
    *) Returns the first child of a tag

    let demo = docuement.getElementById("demo")
    console.log(demo.firstElementChild)  -->(reutrn) h1
    console.log(demo.firstElementChild.innerText)  -->(reutrn) hello world! 
*/
//==============================================================================
//*)  3) lastElementChild 
/*
    *) Returns the last child of a tag

    let demo = docuement.getElementById("demo")
    console.log(demo.lastElementChild)  -->(reutrn) a
    console.log(demo.lastElementChild.innerText)  -->(reutrn) click me

*/
//==============================================================================
//*)  4) parentElement
/*
    *) Returns the father of a tag
    
    let result = document.querySelector("section#demo p")
    console.log(result.parentElement)   ---> (retuen)  tag section
    console.log(result.parentElement.parentElement)   ---> (retuen)  tag body
*/
//==============================================================================
//*)  5) nextElementSibiling 
/*
    *) It shows the next sibling
    
    let result = document.querySelector("section#demo h1")
    console.log(result.nextElementSibiling)   ---> (retuen)  tag a , tag p 
*/
//==============================================================================
//*) 6) previousElementSibiling
/*
    *) It shows the previous siblings

    let result = document.querySelector("section#demo p")
    console.log(result.nextElementSibiling)   ---> (retuen)  tag h1
*/
//==============================================================================
