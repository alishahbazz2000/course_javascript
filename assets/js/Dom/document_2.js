//*) find element in Dom

//==============================================================================
//*) 1) find id in Dom
/*
    *) Follows the tag with the specified id

    document.getElementById("name_id_tag")
    
    document.getElementById("myapp")
    ---> (return) one tag in html (id is unic)
*/
//==============================================================================
//*) 2) find class in Dom
/*
    *) Follows the tag with the specified class
    
    document.getElementByClassName("name_class_tag")

        document.getElementByClassName("myclass")
        --->(return) collection as all tag with className = "myclass" in html
        document.getElementByClassName("myclass[0]")

*/
//==============================================================================
//*) 3) find TagName in Dom
/*
    *) Follows the tag with the specified class
    
    document.getElementsByTagName("name_tag")

    document.getElementsByTagName("h1")
    --->(return) collection as all h1 in html
    document.getElementsByTagName("myclass[0]")

*/
//==============================================================================
//*) 4) find querySelector in Dom
/*
    *) find element According to query
    *) Returns a on  tag
    *) Unlike the rest, we can bet
    *) find id To help queryselector --> use "#"     -->query...("p#myapp")
    *) find class To help queryselector --> use "."  -->query...("p.myapp")

    let result = document.querySelector("p")
    console.log(result)   --->(return) The first tag p in html

    let result = document.querySelector("p.first")
    console.log(result)   --->(return) The first tag p in html 
    That class = "first"

    let result = document.querySelector("p#first")
    console.log(result)   --->(return) The first tag p in html 
    That id = "first"

    let result = document.querySelector("ul li.item")
    console.log(result)   --->(return) The first tag ul and first tag li in html  That class = "item"
*/
//==============================================================================
//*) 5) find querySelectorAll in dom
/*
    *) find element According to query
    *) Returns oneNodeList(array)
    *) Unlike the rest, we can bet
    let result = document.querySelectorAll("p")
    console.log(result)   --->(return)  oneNodeList Of tags p

    let result = document.querySelectorAll("p")
    console.log(result[0]) --> beacuse array

    let result = document.querySelectorAll("p.first")
    console.log(result)   --->(return) oneNodeList Of tags p in html
    That class = "first"

    let result = document.querySelector("ul li.item")
    console.log(result)   --->(return) oneNodeList Of tags ul and tags li in html That class = "item"
*/
//==============================================================================
//*)  getElement vs querySelectorAll
/*
    *) 

    let result_one = document.getElementByClassName("card")
    let result_two = document.querySelectorAll(".card")
    console.log(result_one)   -->(type) HtmlCollection
    console.log(result_two)   -->(type) NodeList

    ---- now
    *) Access all card photos
    1) getElement
    result_one.forEach(function(element){
        console.log(element)
    })
    --------->(return) Error

    2) querySelector
    result_one.forEach(function(element){
        console.log(element)
    })
    --------->(return) Scrolls each tag

    result_one.forEach(function(element){
        element.style.display = "none"
    })
    --------->(return) All inside the card display = "none"
*/
//==============================================================================