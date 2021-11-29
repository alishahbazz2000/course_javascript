//*)  Function in javascript

//==============================================================================
//*)  function
/*
    *) Each function has two parts
    1)  Define   --> declare
    2)  call       --> Invoke

    *) Parameters are these variables which you specify between parentheses when defining a function.
    *) for example function sayHi(name) { ... }  --> name ==>>  parameter 
    *) Arguments then are the concrete values you pass to a function when calling that function:
    *) sayHi('Max'); --> "Max" ==> arqument

    1)) Define
        function name_function (paramter){
            return code    (int , string, bool , ....)
            or 
            console.log/console.table, ...  (void)
        }
    2)) call
    name_function(arguments )

    ----------------   example   --------------------- 
    function sum(a , b){
        return a + b ;
    }
    console.log(sum(6,8))
    console.log(sum)
    console.log(typeof(sum))
*/
//==============================================================================
//*) conditon in return funciton
/*
    funciton check(){
        return retuen
    }
    if(sum() === "true"){
        console.log("yes")
    }
*/
//==============================================================================
//*) The calling location and definition of the function need not be in order
/*

    function say_hello(){
        return "Hello my Son"
    }
    console.log(say_hello())
    ------------------------or----------------
    console.log(say_goodbye())
    function say_goodbye(){
        return "goodbye my son"
    }
*/
//==============================================================================
//*) arrow function 
/*
    *) Normally
    let data = function (firstname , lastname, age){
        return `my name is ${firstname} and my lastname is ${lastname} and my age is ${age}`
    }
    *) arrow function
    let data = (firstname , lastname ,age)=> `my name is ${firstname} and my last name is ${lastname} and my age is ${age}

    let rsult = () => "my name is ali"  (single line not use return)
    console.log(result())

    let result = _ => "my name is lai"
    console.log(result())

    let result = varible_name => `my name is ${varible_name} `
    console.log(result("ali"))

    ---(return object in arrow) --> inside()

    let result = () => ({firstname : "ali"})

*/
//==============================================================================
/*
    *) Proper use of const for defining functions in JavaScript

    function helloWorld() {
        return ‘Hello World!’;
    }

    ----or 

    const helloWorld = () => 'Hello World!';
*/
//==============================================================================
//*) default parameter
/*
    function helloWorld(name = "ali") {
            return name;
    }
    console.log(helloWorld) -->(return) "ali"
*/
//==============================================================================
//*) default use arrow functon
//*) except (below)
/*
    1) syntax

    ---------------------------------------------------------------------------
    2) argument Binding
    
    let myfunc_1 = {
        showArgs (){
            console.log(...arquments)
        }
    }
    myfunc_1.showArgs(1,2,3,4,5) --->(return) 1,2,3,4,5

    let myfunc_2 = {
        showArgs = () =>{
            console.log(...arquments)
        }
    }
    myfunc_2.showArgs(1,2,3,4,5) --->(return) error

    *) arrow funcion is not keyword arquments

    ---------------------------------------------------------------------------
    3) this keyword
    *) arrow not keyword this
    
    let show_info = {
        name : "ali shahbaz",

        show_normal() {
            console.log(this)
            console.log(`my name is ${this.name}`)
        },
        show_arrow : () => {
            console.log(this)   -->(refrence window)
            console.log(`my name is ${this.name}`)
        }
    }
    show_info.show_normal()
    show_info.show_arrow()
    ---------------------------------------------------------------------------
    4) arrow funcion not callabel and not contructabel and New keyword

    let sum_one (a , b){
        return a  + b
    }
    	let a = new Person('Josh') --->(return) TypeError: Person is not a constructor
 
    ---------------------------------------------------------------------------
    5) For arrow, this property does not exist and is undefined
    
    function person() {}
	console.log(person.prototype)--->(return)  Object { … }
	 
	var person = () => {}
	console.log(person.prototype)--->(return) undefined


*/