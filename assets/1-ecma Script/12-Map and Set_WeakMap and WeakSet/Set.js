//*) Set in javascript

//==============================================================================
//*) introduction set
/*
    *) Store (nested) data of any kind and length
    *) Iterable, also some special set methods available
    *) Order is NOT guaranteed, duplicates are NOT allowed, no index-based access
    *) There is no order for indexing
    *) Its members cannot be reached through the index

    *) syntax
    const name_set= new Set(array)


    -----------  code -----------------------

    let data = new Set()
    console.log(data)              --->(return) Set(0){...}
    console.log(typeof data)   --->(return) object

    -----------  code -----------------------

    let data = new Set([1,2,3,4,5])
    console.log(data)              --->(return) Set(5) [ 1, 2, 3, 4, 5 ]

    -----------  code -----------------------

    let data = new Set([1,2,3,4,5,5,4,6,5,4,3])
    console.log(data)              --->(return) Set(5) [ 1, 2, 3, 4, 5 ]
    
    -----------  code -----------------------

    let data = new Set([1,2,3,4,5])
    console.log(data[0])          ---> (return) undefined   

*/
//==============================================================================
