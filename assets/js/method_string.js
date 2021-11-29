// *)  method string in javascript

//==============================================================================
//*  1) concat()
/*
    *) To collect two or more strings
    *)  Is equal to = 
    let name = "ali"
    let family = "shahbaz"
    let age = 20

    let result = name.concat(family,age)                     ---> "alishahbaz20"

                    --or--

    *,... --> seperator
    let result_two = name.concat("*",family , "#" , age)   ---> "ali*shahbaz#20"
*/
//==============================================================================
//*  2) indexOf()
/* 
    *) It starts searching from the beginning
    *) inverse method lastIndexOf() 
    *) The second parameter can control where to start the search
    *) It can return the first search of a word or it can return the first search of a character
    *) Returns the first character in finding string
    *) If this method(indexOf) does not find any value, it returns -1

    indexOf(parameter_one)

    let name = "ali shahbaz"
    console.log(name.indexOf('a'))     --->  iindex = 0
                        ------------------------------------
    indexOf(parameter_one , parameter_two(optional))

    console.log(name.indexOf('a' , 5))   ---> start search as index ==5  (result)  6

*/
//==============================================================================
//*  3) lastIndexOf()
/* 
    *) It starts searching from the end
    *) inverse method indexOf() 
    *)If this method(lastIndexOf) does not find any value, it returns -1


    let name = "ali shahbaz"
    console.log(name.lastIndexOf('a'))     ---> index = 9

*/
//==============================================================================
//* 4) toUppercase() and toLowercase()
/*
    *) Convert all characters in a string to uppercase and lowercase letters

    let name = "Ali sHahBaz"

    let result_one = name.toUpperCase()  ---> ALI SHAHBAZ
    let result_two = name.toLowerCase()  ---> ali shahbaz
*/
//==============================================================================
//*  5) charAt(number)
/* 
    *) This is the reverse of method indexOf(). This field takes the index and returns the character

    let name = "ali shahbaz"
    console.log(name.indexOf('a')) ---->(return) 0

    console.log(name.charAt(0))     ---->(return) 'a'

*/
//==============================================================================
//* 7) charCodeAt()
/*

*/
//==============================================================================
//* 6) slice()
/*
    *) This method takes a number and splits the string and returns a new string

    let name = "ali shahbaz"

    1) slice(parameter_one)
    console.log(name.slice(5))     ---> (return)  "hahbaz"

    2) slice(parameter_one , parameter_two)
    console.log(name.slice(5 , 8)) ---> (return)  "hah"
    (description charcter 5 , 6 , 7 return  character 8 not clude)
*/
//==============================================================================
//* 7) substr()
/*

*/
//==============================================================================
//* 8) substring()
/*

*/
//==============================================================================
//* 9) search()
/*

*/
//==============================================================================
//* 10) endsWith()
/*

*/
//==============================================================================
//* 11) startsWith()
/*

*/
//==============================================================================
//* 12) strike()
/*

*/
//==============================================================================
//* 13) includes()
/*

*/
//==============================================================================
//* 14) replace()
/*
   *) Replace one string or character with another string or character


    
*/
//==============================================================================
//* 15) toString()
/*

*/
//==============================================================================
//* 16) valueOf()
/*

*/
//==============================================================================
//* 17) trim()
/*
    *) Used to destroy space from beginning to end
    let name = "    my name is ali    "
    console.log(name.trim())            --->(return) "my name is ali"

*/
//==============================================================================
//* 18) repeat()
/*
    let name_one = "my name is ali"
    const result_one = name_one.repeat(2)  -->(return) my name is ali my name is ali
*/
//==============================================================================
//* 18) spilt()
/*
    *) Convert string to array by separator  --> split("sperator")

    let name = "my name is ali shahbaz"
    console.log(name.split(" ")) --->(return) ['my','name','is','ali','shshbaz]
*/
//==============================================================================













