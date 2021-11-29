//*) Destructuring assignment

//==============================================================================
//*) Object destructuring
/*
    let {var1, var2} = {var1:…, var2:…}


    *) this is error
    let title, width, height;
    --> error in this line
    {title, width, height} = {title: "Menu", width: 200, height: 100};
*/
//==============================================================================
//*) example
/*
    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };
    let {title, width, height} = options;
    console.log(title)    --->(return)Menu
    console.log(width)  --->(return) 100
    console.log(height) --->(return) 200

    ------ two
    let options = {
        title: "Menu",
        height: 200,
        width: 100
    };
    *---> title = property named title
    *---> rest = object with the rest of properties
    let {title, ...rest} = options;
    *--->now title="Menu", rest={height: 200, width: 100}
    console.log(rest.height) --->(return) 200
    console.log(rest.width) --->(return) 100
*/