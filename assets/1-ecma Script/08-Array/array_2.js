// *)  method array in javascript

//==============================================================================
//* 1) length
/* 
    *) Returns the count of indes
    
    let name = [1,2,3,4,5,6]
    console.log(name.length) ---> (return)  6
*/
//==============================================================================
//* 2) Array.isArray()
/* 
    *)  class Array
    *) Checks if this variable is present or not
    *) return true or false
    
    let name = [1,2,3,4,5,6]
    console.log(Array.isArray(name)) ---> (return)  true
*/
//==============================================================================
//* 3) instanceof
/*
    *) Checks if this is an example of a  class Array
    *) return true or false

    let name = [1,2,3,4,5,6]
    console.log(name instanceof Array) ---> (return)  true

*/
//==============================================================================
//*  4) toString()
/*
    *) convert date as list to the string
    
    let name = [1,2,3,4,5,6]
    le result = name.toString()
    console.log(result)                --->(return) "1,2,3,4,5,6"
    console.log(typeof result )   --->(return) string

*/
//==============================================================================
//*  5) pop()
/*
    *)  remove index from the end  array
    *)  Returns the deleted value
    
    let name = [1,2,3,4,5,6]
    let result = name.pop()
    console.log(result)       --->(return) 6
    console.log(result)       --->(return) [1,2,3,4,5]
*/
//==============================================================================
//*  6) push(value)
/*
    *) added value from the end array

    let name = [1,2,3,4,5]
    name.push(100)
    console.log(name)        ----> (return) [1,2,3,4,5,100]

    ------- or 

    let name = [1,2,3,4,5]
    name[name.length] = 200
    console.log(name)          ---->(return)  [1,2,3,4,5,200]
*/
//==============================================================================
//*  7) unshift(value)
/*
    *) added value from the end array

    let name = [1,2,3,4,5]
    name.unshift(100)
    console.log(name)     --->(result) [100,1,2,3,4,5]
*/
//==============================================================================
//*  8) shift()
/*
    *) remove value from the start array

    let name = [1,2,3,4,5]
    name.shift()
    console.log(name)        --->(result) [2,3,4,5]
*/
//==============================================================================
//*  9) splice()
/*
    *)  Add or remove from anywhere in the array
    *) splice(start_index , count remove value , one or more value)
    *) added and remove one or more value
    
    let name = [1,2,3,4,5,6]
    name.splice(1,2,200,400,600)
    *) start index = 1 and remove 2 next index (2,3) and added as index 2 value 200,400,600
    console.log(name)  --->(return) [ 1, 200, 400, 600, 4 , 5, 6 ]

    --------------------- or  ---------------------------- 

    let  name = [1,2,3,4,5,6]
    let result = name.splice(2,4)   --> show remove items
    console.log(name)   --->(return) [ 1,2 ]
    console.log(result)  --->(return) [3, 4, 5, 6]

    --------------------- or  ---------------------------- 
    *) remove all value in array

    let  name = [1,2,3,4,5,6]
    name.splice(0)
    console.log(name)   --->(return) [ ] empty array


     --------------------- or  ---------------------------- 
    *) remve from start until the number in pranthess

    let  name = [1,2,3,4,5,6]
    name.splice(2)
    console.log(name)   --->(return) [3, 4, 5, 6]

    --------------------- or  ---------------------------- 
     let  name = [1,2,3,4,5,6]
    let result = name.splice(-2,2)   --> show remove items
    console.log(name)   --->(return) [ 1,2,3,4 ]
    console.log(result)  --->(return) [5,6]

    --------------------- or  ---------------------------- 
   
    *) copy array with method slice()

    let data = [1,2,3,4,5]
    let result = data.slice()
    console.log(data)                   ---->(return) [1,2,3,4,5]
    console.log(result)                 ---->(return) [1,2,3,4,5]
    console.log(data == result)     ---->(return) false
    console.log(data === result)   ---->(return) false

    result.push(800)
    console.log(data)                   ---->(return) [1,2,3,4,5]
    console.log(result)                 ---->(return) [1,2,3,4,5, 800]
*/
//==============================================================================
//*  10) concat()
/*
    *) 
    let array_one  = [1,2,3,4,5,6]
    let array_two = [100,200,300]
    let array_three = array_one.concat(array_two)
    console.log(array_three)       ---->(return) [1,2,3,4,5,6,100,200,300]
*/
//==============================================================================
//* 11) slice(start_index , end_index)
/*
    *) 
    
    let array = [1,2,3,4,5,6]
    let array_one = array.slice(2,4)
    console.log(array_one)      --->(return) [3,4]
*/
//==============================================================================
//* 12) sort()
/*
    *) Sort array values

    **)))This method sorts by ASCII code

    let data = [5,66,8,0,1,11,13]
    console.log(data)                 ----->(return) [5, 66, 8, 0, 1, 11, 13]

    let new_array = data.sort()
    console.log(new_array)       ----->(return) [0, 1, 11, 13, 5, 66, 8]

    -------------  or -------------------------------------

    **)) Sort by smallest value

    let name = [70,7,77,27,270,1,0,00,11,12,120]
    console.log(name.sort((a , b) => a  - b)) 
    ----> (return)  Array(11) [ 0, 00, 1, 7, 11, 12, 27, 70, 77, 120, 270]

    **)) Sort by largest value

    let name = [70,7,77,27,270,1,0,00,11,12,120]
    console.log(name.sort((a , b) =>b- a))
    ----> (return) Array(11) [ 270, 120, 77, 70, 27, 12, 11, 7, 1, 0, 00 ]



    const users = [
        { name: 'Dirk', age: 35},
        { name: 'Céline', age: 52},
        { name: 'Me', age: 3},
	]
	users.sort(function(a, b) {
	    return a.age - b.age
	})
	 
	---->(return)
    [
	  { name: 'Me', age: 3},
	  { name: 'Dirk', age: 35},
	  { name: 'Céline', age: 52},
	]


    ----------------------------------------------------------------------------
    *) Use localeCompare for strings

    1) Remember strings comparison algorithm? It compares letters by their codes by default.
    2) For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
    3)For example, let’s sort a few countries in German:

    let countries = ['Österreich', 'Andorra', 'Vietnam'];

    alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

    alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

*/
//==============================================================================
//* return big value in array
/*
    let name  = [1,2,3,4,5,6]
    console.log(Math.max.apply(null, name)) ---> (return) 6

*/
//==============================================================================
//* return small value in array
/*
    let name  = [1,2,3,4,5,6]
    console.log(Math.min.apply(null, name)) ---> (return) 1

*/
//==============================================================================
//*  13) indexOf()
/*
    let name = [1,2,3,4,5,6]
    console.log(name.indexOf(3))       --->(return) 2

    *) parameter two --> Specifies the starting point of the search
    let name = [1,2,3,1,4,5,6]
    console.log(name.indexOf(1 , 2))   --->(return) 4

    *) If it does not find anything, it returns a value of -1
    let name = [1,2,3,4,5,6]
    console.log(name.indexOf(30))       --->(return) -1
*/
//==============================================================================
//*  14) lastIndexOf()
/*
    let name = [1,2,3,4,5,3,6]
    console.log(name.lastIndexOf(3))  --->(return) 5

    *) parameter two --> Specifies the starting point of the search
*/
//==============================================================================
//*  15) find()
/*  
    *) This method returns the first member for which we want the condition to be met.
    *) It is good to use this method when we have an array of several objects and each of these objects contains a specific field such as id.
    *) For example, an array of users coming from a database. To search for a specific identifier in this array, just use this method:
    *) If no member is found, the output of this method is undefined
    *) syntax
    arr.find(callback_function(element , [ index , [ array]])[, thisArg])
    --or
    let result = arr.find(function(item, index, array) {
    });

    ---- example
        let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];
    let user = users.find(item => item.id == 1);
    alert(user.name)  --->(return) John

*/
//==============================================================================
//*  16) reverse()
/*
    *) The reverse() method reverses an array in place. 
    *) The first array element becomes the last, and the last array element becomes the first.
    *) syntax
    arr.reverse()

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.reverse())
    --->(return) ["Mango", "Apple", "Orange", "Banana"]
*/
//==============================================================================
//*  17) includes()
/*
    *) return true or false
    *) The value we give it returns true if it's inside the array, it returns false if it's not
    
    *) syntax
    array.includes(value, fromIndex);
    1) value: The value we want to search in the array.
    2) fromIndex: This argument is optional and with it we can specify which index number to start the search. The value of this argument is 0 by default.

    let name = [1,2,3,4,5]
    console.log(name.includes(1))     ----> (return) true
    console.log(name.includes(10))   ----> (return) false
*/
//==============================================================================
//*  18) map()
/*
    *)This method performs a series of operations on each member of the array and dumps the output into a new array.
    let newArray = arr.map(callback(currentValue[, index[, array]]) {
        /return element for newArray, after executing something
    }[, thisArg]);

    *) syntax

    *)When not to use the map?
    *) The output of this method is a new array. If we do not need the newly created array, it is better not to use this method and use regular loops such as forEach and for ... of instead.
    *) The function passed to the map method must always have a return.
    *) Otherwise the output is undefined for the member being processed
    
    let  data = [1,2,3,4,5,6]

    data.map((par_one , par_two , par_three)=>{

        console.log(par_one)        ----> (return)    value                  
        console.log(par_two)        ----> (return)    index
        console.log(par_three)     ----> (return)    Total array

    })
    ----> output
    1
    0
    [1,2,3,4,5,6]
    2
    1
    [1,2,3,4,5,6]
    .
    .

    -----------or
    data.map((value , index , namearray)=>{

        console.log(value)        ----> (return)    value                  
        console.log(index)        ----> (return)    index
        console.log(namearray)     ----> (return)    Total array

    })

*/
//==============================================================================
//*  20) filter()
/*
    *) Filtering is used on the values of an array
    *) The output of this method is a new array of items

    data.filter((value , index , namearray)=>{

        console.log(value)        ----> (return)    value                  
        console.log(index)        ----> (return)    index
        console.log(namearray)     ----> (return)    Total array

    })

    --------- for example
    let Scores = [20,23,56,89,42,15,36,45,11,0,75,61]

    let result = name.filte((score , index , Scores)=>{
        return score > 50    
    })
    console.log(result)      --->(return) [56,89,75,61]

    ----------------  use  Object Destructuring

    const users = [
	    { name: 'Chris', color: 'Brown' },
	    { name: 'Napoleon', color: 'Green' },
	    { name: 'David', color: 'Blue' },
	    { name: 'Michael', color: 'Green' },
	];
    const greenLovers = users.filter(
	    ({ color }) => color === 'Green'
	)
    console.log(greenLovers)
*/
//==============================================================================
//*  21) reduce()
/*
    let result= numbers.reduce((prevValue , curValue , curIndex , name array)=>{
    }, value sums)

    ------> example
    let numbers = [7,6,8,2,23]
    let result= numbers.reduce((prevValue , curValue , curIndex , name array)=>{
        return prevValue + curValue
    }, 0)
    console.log(result)  --->(return)  46

    ------> example
    let numbers = [7,6,8,2,23]
    let result= numbers.reduce((prevValue , curValue , curIndex , name array)=>{
        return prevValue + curValue
    }, 10)
    console.log(result)  --->(return)  46 + 10 = 56
    
*/
//==============================================================================
//*) reduceRight () 
/*

*/
//==============================================================================
//*  22) join()
/*
    *) reverse method split() in string
    *) conver array to string
    *) join("seprator")
    
    let name = ["ali", "shahbaz","33"]
    let resutl = name.join()
    console.log(result)      ---->(return) ali,shahbaz,33

    ----or
    let data = ["ali","shahbaz","33"]
    let result = data.join("/")
    console.log(result)      ---->(return) ali/shahbaz/33
*/
//==============================================================================
//*) some()
/*
    *) We use this method if we want to check if at least one member of the array complies with our desired condition.
    *) The output of this method is true if our condition holds for at least one member of the array.
    *) Otherwise false. The following method is used when we want to make sure that at least one member of the array has a series of conditions: 

    *) syntax
    arr.some(callback(element[, index[, array]])[, thisArg])

    var numbers = [2, 3, 5, 11];
	var hasBiggerThan10 = numbers.some(item => item > 10);
	console.log(hasBiggerThan10) --->(return) true

    *-->In the code above, we checked whether the array contains at least one member greater than 10
*/
//==============================================================================
//*)  every()
/*
    *) We use this method if we want to check if all the members of the array follow a condition.
    *) The output is the Boolean method and is true only if all members of the array follow the condition.
    *) syntax
    arr.every(callback(element[, index[, array]])[, thisArg])

    let numbers = [11, 12, 13, 14, 20, 29];
	let areGreaterThan10 = numbers.every(number => number > 10);
	console.log(areGreaterThan10) --->(return) true
    let areGreaterThan20 = numbers.every(number => number > 20);
	console.log(areGreaterThan20) --->(return) false
*/
//==============================================================================
