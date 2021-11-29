//*)  Function in javascript

//==============================================================================
//*) typeof function (With or without parentheses)
/*
    function sayHello(){
        return "my name is ali"
    }       

    *) Without parentheses typeof returns function
    console.log(typeof sayHello)   --> "function"

    *)With parentheses typeof returns its output
    console.log(typeof sayHello()) --> "string"

    *) Display information one funciton
    console.dir(sayHello)

*/
//==============================================================================
//*) copy by refrence
/*
    *) If we call a function without parentheses or give a variable without parentheses, its output is the function itself.

    function sum(a , b){
        return a + b
    }
    console.log(sum)
    let func_two = sum
    console.log(func_two)
    ------- reutn two console.log simaller ------
    (return) -->function  sum(a , b){
                        return a + b
                    }
*/
//==============================================================================
//*) function expeersion
/*
    *) A Function Expression is created when the execution reaches it and is usable only from that moment.

     --->(function declaration)
    function sayHello(){
        return "welcome to my website"
    }

    --->(function Expression)
    const sayHello = function (){
        return "welcome to my website"
    }

*/
//==============================================================================
//*) different way of create function
//*) function declaration (function statment) vs function Expression
/*
    *) function declaration
    sayHello() --->(return) "welcome to my webiste"
    fucntion sayHello(){
        return "welcome to my website"
    }
    sayHello() --->(return) "welcome to my webiste"

    *) function Expression
    sayHello() --->(return) syntax error "can not access sayHello before initialization "

    let sayHello = function(){
        return "welcome to my website"
    }
    sayHello() --->(return) "welcome to my webiste"


    1) First, the syntax: how to differentiate between them in the code.
    
*/
//==============================================================================
//*) Anonymous Functions
/*
    const start = function(){
        console.log("welcome to website")
    }
    *) start  ---> refrece --> function anonymous

     *)  This function is executed at least once
    (function(){
        console.log("my name is function expersion")
    }())

    let sayHello=  function(){
        console.log("my name is ali")
    }()

    *) IIFE  => Immediately Invoked Function Expression
    *) Be sure to put open and closed parentheses
    *) We can also give it a parameter as shown below

    (function(name){
        console.log(name)
    }("ali shahbaz"))

    *) Why use IIFE?
    1) Variables are only for that function or domain and are not accessible from outside the function

    (function() {
	  var x = 10;
	})()
	console.log(x) --->(return)  ReferenceError: x is not defined;

    2) Global domain variables are not manipulated

    var z = 20;
	(function() {
	  var z = 10;
	})()
	console.log(z) --->(return) 20

*/
//==============================================================================
//*) Different methods of writing IIFE
/*
    ;(function() {
	 
	}());
	 
	-(function() {
	 
	}());
	 
	+(function() {
	 
	}());
	 
	!(function() {
	 
	}());
	 
	~(function() {
	 
	}());
*/
//==============================================================================
//*)
/*

*/
//==============================================================================

