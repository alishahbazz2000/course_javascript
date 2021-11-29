//* History javascript
/*
    
    1) javascript --> programming language

    2) Mocha  -->  live script  --> javascript

    2.1) actionScript --> jsScript --> javascript(Ecmascript)

    3) javascript --> clinet  Dynamics (refresh or f5 run again javascript)webiste with code html(hypertext markup language)

    4) javacript --> Interpreter and run by browser user

    5) javascript --> oop(object orignted programming) with es5+(ecma script 5+)

    6) change tag html with --> Dom(Document object model)

    7) change browser with --> Bom(browser object model) 

    8) Management event  and click (user) with javascript

    9) access to the  cookie and session browser for Store date

    10) interpreter javascript for chrome and opera --> v8

    11) interpreter javascript for firfox --> spiderMonkey

    12) interpreter javascript for Safari --> Nitro & SquirrelFish
    
    13) interpreter javascript for Microsoft Edge --> ChakraCore

    14) interpreter javascript for IE --> Chakra

    15) The JavaScript language was initially created for web browsers.
    Since then it has evolved and become a language with many uses and platforms.

    15) javascript --> create website and application (startup)

    16) frameform javascript ---> reactjs *  vuejs *  reactnative *  angular * ionic deno nodejs * pwa *  spa  * electronjs

    17) single thread  and multi thread  -->
            single thread  --> The codes are executed linearly and sequentially
            multi thread --> not javascript(not Parallel lines(movazi))  

    18) javascript not datatype (var name = "ali"  name = 52) --> dont es6 and typescript

    19) javascript Consists of 3 parts
            1) ecma script
            2) dom(document object model)
            3) bom(browser object model)

    20) ECMAScript is the standard upon which javascript is based

    21) ECMa --> is an international suess standards association that is
    in charge of defining international standards

    20) javascript is a implementation of the ECMAScript standard
    a log time ago ES3
    ES4 was canceled due to feature creep
    ES5 huge version for javascript
    ES6(2015)
    .
    .
    ES11
*/
//-----------------------------------------------------------------------------
//* auto refresh (speed run code)
/*
    1) for Refresh borwser ---> (in vscode) install plugin live server

    2) for Refresh borwser ---> (in browser When you use phpstorm and webstorm and  phpstorm )  install extention auto(automatic) refresh in browser(chrome or firfox) 
*/
//-----------------------------------------------------------------------------
//* syntax putting up code javascript
/*
    1) internal --> code in tag script inside html (head or body)

    <script>
        alert("Hello my son")
    </script>

    2) external --> code in file javascript(.js) and added to doucment html

    <script src="file.js"></script>

    *) ../  ->   This time each open comes out of a file

    *) The order of the file placement is very important in the latter method(external)
     
*/
//-----------------------------------------------------------------------------
//* added javascript to document html
/*
    <script src=""></script>
                or 
    <script>
            define code javascript
    </script>

    1) added to tag head

    2) added to tag body(end line befor </body>)  ***
    *) 2 It's better

   *******example head*****
    <head>
    <script>
        document.write("hello")
    </script>                                           
    </head>
    <body>
        <p>my name is ali</p>
    </body>
   *******example body*****
    <head>
    </head>
    <body>
        <p>my name is ali</p>
        <script>
            document.write("hello")
        </script>  
    </body>

*/
//-----------------------------------------------------------------------------
/*
    *) Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

    *)(framwork) Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.

    *) IDE (Integrated Development Environment)

*/
//==============================================================================
//*)  How do engines(interperter) work?
/*
    1) The engine (embedded if it’s a browser) reads (“parses”) the script.
    2) Then it converts (“compiles”) the script to the machine language.
    3) And then the machine code runs, pretty fast.

*/
//==============================================================================
//*) What is the purpose of it?
/*
    1) animation
    2) change Content
    3) validation form
*/
//==============================================================================
//*)  high level   --> یعنی به زبان انسان نزدیک تر است هر چه قدر یک زبان به زبان انسان نزدیک تر باشد ما کد کمتری مینویسیم و به زبان انسان نزدیک تر است

//*) community     -->  به جامعه گفته میشه که به عنوان برنامه نویس جاوااسکریپت فعال هستند و به سوالات سایر برنامه نویس ها پاسخ می دهند  کتاب خونه  های جاوااسکریچت رو توسعه میدن 