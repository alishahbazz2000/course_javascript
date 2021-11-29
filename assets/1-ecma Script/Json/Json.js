//*)  JSON in javascript

//==============================================================================
//*) about json
/*
    *) json --> javascript object notation
    *) A format for exchanging information or data between all applications
    *) json --> array as object
    *) Used in all programming languages

    let json_name = [
        {firstName: "ali" , lastName : "shahbaz" , age: 30},
        {firstName: "sara" , lastName : "hamidi" , age: 20}
    ]

*/
//==============================================================================
//*---------------------------> method JSON -------------------------->
//==============================================================================
//* 1) JSON.stringify()
/*
    *) It turns into a string for Json

    let data = ["ali","shahbaz","20","test@test.com"]
    console.log(data)
    let result = JSON.stringify(data)
    console.log(result)

    ---or example

    let data = [
        {firstName: "ali",lastName:"shahbaz",age:21},
        {firstName: "sara",lastName:"kiani",age:18},
        {firstName: "javad",lastName:"omidi",age:40},
    ]
    let test_one = JSON.stringify(data)
    console.log(test_one)

*/
//==============================================================================
//* 1) JSON.parse()
/*
    *) This comes out of the string mode

    let data = ["ali","shahbaz","20","test@test.com"]
    console.log(data)
    let result_one = JSON.stringify(data)
    console.log(result_one)
    let result_two = JSON.parse(result_one)
    console.log(result_two)

        ---or example

    let data = [
        {firstName: "ali",lastName:"shahbaz",age:21},
        {firstName: "sara",lastName:"kiani",age:18},
        {firstName: "javad",lastName:"omidi",age:40},
    ]
    let test_one = JSON.stringify(data)
    console.log(test_one)
    let test_two = JSON.parse(test_one)
    console.log(test_two)
*/
//==============================================================================