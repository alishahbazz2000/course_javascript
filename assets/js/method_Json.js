//*)  method json in javascript

//==============================================================================
//*)  1) find
/*
    *)  Returns the first event only

    let data = [
        {firstname: "ali", lastname: "shahbaz" , age: 30},
        {firstname: "sara", lastname: "tahri" , age: 27},
        {firstname: "amin", lastname: "salehi" , age: 19},
        {firstname: "yassin", lastname: "tourki" , age: 35},
        {firstname: "pedram", lastname: "khazemi" , age: 19},
    ]
    const result = data.find(function (person) {
        return person.age == 19
    })
    console.log(result)
     -------------------->(return)  1 ta row
*/
//==============================================================================
//*)  2) filter
/*
    *) Returns all events

    let data = [
        {firstname: "ali", lastname: "shahbaz" , age: 30},
        {firstname: "sara", lastname: "tahri" , age: 27},
        {firstname: "amin", lastname: "salehi" , age: 19},
        {firstname: "yassin", lastname: "tourki" , age: 35},
        {firstname: "pedram", lastname: "khazemi" , age: 19},
    ]
    const result = data.filter(function (person) {
        return person.age == 19
    })
    console.log(result)
    -------------------->(return)  2 ta row
*/
//==============================================================================
//*)  3) map
/*
    *) return true or false
    *) return data

    let data = [
        {firstname: "ali", lastname: "shahbaz" , age: 30},
        {firstname: "sara", lastname: "tahri" , age: 27},
        {firstname: "amin", lastname: "salehi" , age: 19},
        {firstname: "yassin", lastname: "tourki" , age: 35},
        {firstname: "pedram", lastname: "khazemi" , age: 19},
    ]
    *)1
     const result = data.map(function (person) {
        return person.age == 19
    })
    -------------------->(return)  [false , false , true , false , true]
     const result = data.map(function (person) {
        return person.age == 25
    })
    -------------------->(return)  [false , false , false , false , false]

    *2)
        data.map(function(element , index){
            console.log(index , element)
        })

*/
//==============================================================================
