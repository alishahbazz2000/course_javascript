//*) method set in javascript

//==============================================================================
//*)  1) add()
/*
    *) Add a value to set
    *) If the value is duplicate, it will not be added

    let data = new Set([1,2,3,4,5])
    data.add(500)
    console.log(data)  ---->(return) [1,2,3,4,5,500]
    data.add(5)
    console.log(data)  ---->(return) [1,2,3,4,5,500]

 */
//==============================================================================
//*)  2) clear()
/*
 */
//==============================================================================
//*)  3) delete()
/*
    *) Removes an item from the set
    *) Output true or false

    let data = new Set([1,2,3,4,5])
    let result = data.delete(5)
    console.log(result)      ----->(return) true
    console.log(data)         ----->(return) [1,2,3,4]

 */
//==============================================================================
//*)  4) entries()
/*
    let data = new Set([1,2,3,4,5])
    for(index of oop.entries()){
        console.log(index)
    } 
    --->(return) 
    Array [ 1, 1 ]
    Array [ 2, 2 ]
    Array [ 3, 3 ]
    Array [ 4, 4 ]
    Array [ 5, 5 ]

    for(index of oop.entries()){
        console.log(index[0])
    } 
 */
//==============================================================================
//*)  5) forEach()
/*
 */
//==============================================================================
//*)  6) has()
/*
    *) Checks if the value I say is in the set or not
    *) return true or false

    let data = new Set([1,2,3,4,5])
    console.log(data.has(2))          ------>(return) true
    console.log(data.has(20))        ------>(return) false
 */
//==============================================================================
//*)  7) keys()
/*
 */
//==============================================================================
//*)  8) size
/*
    *) If we want to understand the number of members of the object

    const uniqueNumbers = new Set([1, 2, 2, 2, 3]);
	alert(uniqueNumbers.size) --->(return) 3
 */
//==============================================================================
//*)  9) values()
/*
 */
//==============================================================================

