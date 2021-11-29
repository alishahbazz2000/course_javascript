//*)  Eval in javascript

//==============================================================================
//*) Eval: run a code string
/*
    *) The built-in eval function allows to execute a string of code.
    *) The syntax is:
    let result = eval(code);

    let code = 'alert("Hello")';
    eval(code)--->(return) Hello

    *) A string of code may be long, contain line breaks, function declarations, variables and so on.
    *) The result of eval is the result of the last statement.

    --------------------------- example ---------------------------------
    let value = eval('1+1');
    console.log(value)  -->(return) 2

    let value = eval('let i = 0; ++i');
    console.log(value)  -->(return) 1

    --------------------------- example ---------------------------------
    let a = 1;
    function f() {
        let a = 2;
        eval('alert(a)'); // 2
    }
    f();

    *) In strict mode, eval has its own lexical environment. 
    *) So functions and variables, declared inside eval, are not visible outside:

    *--> reminder: 'use strict' is enabled in runnable examples by default
    eval("let x = 5; function f() {}");
    alert(typeof x) ---->(return) undefined (no such variable)
    *-->  function f is also not visible
*/
//==============================================================================
//*) Using “eval”
/*
    *) In modern programming eval is used very sparingly. 
    *) It’s often said that “eval is evil”.

    *) The reason is simple: long, long time ago JavaScript was a much weaker language, many things could only be done with eval. 
    *) But that time passed a decade ago.

    *) Right now, there’s almost no reason to use eval. 
    *) If someone is using it, there’s a good chance they can replace it with a modern language construct or a JavaScript Module.

    *) Please note that its ability to access outer variables has side-effects.

    *) Code minifiers (tools used before JS gets to production, to compress it) rename local variables into shorter ones (like a, b etc) to make the code smaller. 
    *) That’s usually safe, but not if eval is used, as local variables may be accessed from eval’ed code string. 
    *) So minifiers don’t do that renaming for all variables potentially visible from eval. 
    *) That negatively affects code compression ratio.

    *) Using outer local variables inside eval is also considered a bad programming practice, as it makes maintaining the code more difficult.


    let x = 1;
    {
    let x = 5;
    window.eval('alert(x)'); // 1 (global variable)
    }
*/