//*) Dom in javascript

//==============================================================================
//*) Dom (document object model) 
/*
    *) Affects html elements and increases or decreases them
    *) access --> document (root)
    *) Tree html
    *) document child window
    *) DOM is not strictly tied to Browsers! There are other tools that can parse HTML!
    *) In the DOM world null means “does not exist”
    *) In the DOM, the null value means “does not exist” or “no such node”.

    console.log(document)
    console.dir(document)
    console.log(window.document)
    console.log(this.document)
    console.log(this.window.document)
*/
//==============================================================================
//*) There’s a “root” object called window.
/*
    *) It has two roles:
    First, it is a global object for JavaScript code, as described in the chapter Global object.
    Second, it represents the “browser window” and provides methods to control it.
*/
//==============================================================================
//*) document
/*
    *) The document object is the main “entry point” to the page.
    *) We can change or create anything on the page using it.
    *) All operations on the DOM start with the document object.
*/
//==============================================================================
//*) CSSOM
/*
    *) There’s also a separate specification, CSS Object Model (CSSOM) for CSS rules and stylesheets,
    that explains how they are represented as objects, and how to read and write them.
    *)CSSOM is used together with DOM when we modify style rules for the document.
    In practice though, CSSOM is rarely required, because we rarely need to modify CSS rules from JavaScript
    (usually we just add/remove CSS classes, not modify their CSS rules),  but that’s also possible.
*/
//==============================================================================
