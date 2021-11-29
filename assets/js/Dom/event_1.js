//*)  Event in javascript

//==============================================================================
//*) about Event
/*
    *) If something happens to your html document --> event
    *) event includes --> click , mouseover , mousemove , ....
    *) in html start - on(event)  --> oncick , onmousemve
    *) 3 models are written that the first 2 models are not used at all
*/
//==============================================================================
//*) ------------------------------------> model one -------------------------->
//*) Event in Html
/*
    *) event For events inside html we pass the function in parentheses
    *) function create in javascript

    <button  onclick = "function()"></button>

    ---html
    <h1 id="demo">hello</h1>
    <button   onclick = "clickme()"></button>
    <button   onclick = "about("alishahbaz")"></button>

    *) multi event
    <button onclick ="function_one()" onmousemove="function_two" (more event)>
    </button>

    ---js
    let demo  = document.getElementById("demo")
    function clickme(){
        demo.style.backgroundColor = "red"
    }
    function about(name){
        alert(`my name is ${name}`)
    }

*/
//==============================================================================
//*) ------------------------------------> model two -------------------------->
//*) Implement your own html
/*
    <button   onclick = "alert("ok")"></button>

    *) this --> window
    <h1   onclick = "this.style.display = 'none';"></h1>
*/
//==============================================================================
//*) ------------------------------> model three *** -------------------------->
//*) add event in javascript To help addEventListener
/*

    //*)  addEventListener

    *) Adds an event to a tag, such as a click
    *) Events are used without on . (not on)
    *) two parameter
    1) name event (not on)
    2) function anonymous  --> What to do with this event

    let result = document.getElementById("myapp")
    result.addEventListener("click" , function(){
        console.log("click me")
    })

    ------or 
    let result = document.getElementById("myapp")
    result.addEventListener("click" , test) -->(function No parentheses)
    function test(){
        console.log("click me")
    }

    ----------> example

    <h1 id="demo">hello</h1>
    <button  id="button">Click me</button>   

    let demo = document.getElementById("demo")
    let button = document.getElementById("button")
    button.addEventListener("click",function(){
        demo.innerText ="hello my name is alishahbaz"
    })

*/
//==============================================================================
//*) e or event object
//*) preventDefault
/*
    *) It says forget the previous behavior of everything you had and do what I tell you 
    *) use tag a  and form
    *) For example, the behavior tag on the page refreshes the page when you click
    *) But this method tells the a tag to forget the previous behavior that was refreshed and to do what I say
     *) It does not have to be e, it can be anything for exmple test , num , name,....
    ---html
    <a href = "#" id="demo">click me</a>
    
    ------------->Compare the two
    let demo  = docuement.getElementById("demo")
    demo.addEventListener("click" , function(e){
        e.preventDefault()
        console.log("hello world")
    })

    demo.addEventListener("click" , function(e){
        e.preventDefault()
        console.log("hello world")
    })

*/
//==============================================================================
