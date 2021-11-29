//*) loop for in javascript

//==============================================================================
/*
    *) for(define varible ; condition ; Add or subtract){
        code
    }  
    *) How to run for
    define varible  --> condition -->  add or subtract --> code --> condition --> add or subtract --> code ....  --> condition ---> end for loop

    for (let i = 0 ; i < 3 ; i++){
        console.log(`Hello ${i}`) 
    }
    --->(return) "Hello1Hello2Hello3"

*/
//==============================================================================
//*) forEach(functoin(value or  value , index){})
/*
    *) callback ---> funciton(anunymous)

    let data = [11,12,13,14,15,16]
    data.forEach(function(value){
        console.log(value)
    })
    --------> (return) 11,12,13,14,15,16
    -------------------  or  ---------------
    let data = [11,12,13,14,15,16]
    data.forEach(function(value , index){
        console.log(value+" : " + index)
    })
    --------> (return) 11 : 0,12 : 1,13 : 2,14 : 3,15 : 4,16 : 5

*/
//==============================================================================
//*)  for__in  ---> (return) index or key  (array and object )
/*
    const data = {
        firstName : "ali",
        lastName  : "shahbaz",
        age : 20
    }
    for (index in data){
        console.log(index)
        console.log(data['index'])
    }
*/
//==============================================================================
//*) for__of  ---> (return) value (array)
/*
    let data = ['ali','shahbaz','javad','homan','sara']
    for (index of data){
        console.log(index)
    }

    let result = "my name is ali shahbaz"
    for (index of result){
        console.log(index)
    }
*/
//==============================================================================
//*) for simler while
/*
    let i =0
    for (; i < 10;){
        console.log(i) 
        i++
    }
*/
//==============================================================================
//*) for infinity
/*
    for( ; ; ){
        console.log("hello")
    }
*/
//==============================================================================
