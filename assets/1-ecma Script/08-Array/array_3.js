//==============================================================================
//*) spread in array
/*
    *) Scrolls the array
    *) copy array
    *) refrence not equal

    let name = ["sara", "ali", "hamid", "max"]
    let result_one = [name]
    console.log(result_one)   ---->(return) [["sara", "ali", "hamid", "max"]]
    let result_two = [...name]
    console.log(result_two)  ---->(return) ["sara", "ali", "hamid", "max"]
    name.push("omid")
    console.log(name) ---->(return) ["sara", "ali", "hamid", "max","omid"]
    console.log(result_two)  ---->(return) ["sara", "ali", "hamid", "max"]

    ------ or 

    let number = [55,96,33,10,2,5,68]
    let result_one = Math.min(number)      ----->(return) NaN
    let result_two = Math.max(...number)   ----->(return) 96

    ------ or 

    let data = [{name:"ali",age:20},{name:"farhad",age:40},{name:"pedram",age:15}]
    let person = [...data]
    data.push({name:"Amir",age:19})
    console.log(data)        ---->(return) [{name:"ali",age:20},{name:"farhad",age:40},{name:"pedram",age:15},{name:"Amir",age:19}]
    console.log(person)     ---->(return) [{name:"ali",age:20},{name:"farhad",age:40},{name:"pedram",age:15}]

*/
//==============================================================================
//*) array destructuring
/*

    ---- example two  ------------------------------------------------------

    let data = ["sara","ali","hamid"]
    let [name_one , name_two , name_three, name_four] = data

    console.log(name_one)       --> (return) "sara"
    console.log(name_two)       --> (return) "ali"
    console.log(name_three)   --> (return) "hamid"
    console.log(name_four)     --> (return) undefined

    ---- example one  ------------------------------------------------------

    let data = ["sara","ali","hamid","farhad","javad"]
    let [name_one , name_two , ...name_three] = data

    console.log(name_one)       --> (return) "sara"
    console.log(name_two)       --> (return) "ali"
    console.log(name_three)    --> (return) ["hamid", "farhad", "javad"]

    ---- example one  ------------------------------------------------------
    *) Default values

    let [firstName, surname] = [];

    console.log(firstName)  --> (return)undefined
    console.log(surname)     --> (return) undefined

    ---- example one  ------------------------------------------------------

    let [a, b, c] = "abc"; // ["a", "b", "c"]
    let [one, two, three] = new Set([1, 2, 3]);

*/
//==============================================================================
//*)  Swap variables trick
/*
    *) There’s a well-known trick for swapping values of two variables using a destructuring assignment:

    let guest = "Jane";
    let admin = "Pete";
    [guest, admin] = [admin, guest];

    console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

*/
//==============================================================================
